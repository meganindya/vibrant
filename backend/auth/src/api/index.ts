import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { PrismaClient } from '../db/generated';

// -----------------------------------------------------------------------------

const db = new PrismaClient();

const router = Router();

router.use((req, res, next) => {
  if (!['/login', '/logout'].includes(req.path)) {
    const { cookies, headers } = req;

    if (!('token' in cookies || 'authorization' in headers)) {
      res.sendStatus(403);
      return;
    }

    const token = (
      'token' in cookies ? cookies.token : headers.authorization?.split(' ')[1]
    ) as string;

    const { uuid, exp } = jwt.decode(token) as {
      uuid: string;
      iat: number;
      exp: number;
    };

    if (new Date() > new Date(exp)) {
      // res.sendStatus(403);
      // return;
    }

    req.body = {
      uuid,
    };
  }

  next();
});

// -----------------------------------------------------------------------------

router.post('/login', async function (req, res) {
  const { username, password } = req.body;

  if (
    !(typeof username === 'string' && username.length > 0) ||
    !(typeof password === 'string' && password.length > 0)
  ) {
    res.sendStatus(400);
    return;
  }

  const record = await db.user.findFirst({
    where: {
      uname: username,
    },
  });

  if (record === null || !(await bcrypt.compare('password', record.hash))) {
    res.sendStatus(403);
    return;
  }

  res.cookie(
    'token',
    jwt.sign(
      {
        uuid: record.uuid,
      },
      'privatekey',
      {
        expiresIn: '1d',
      },
    ),
    {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: true,
    },
  );
  res.send();
});

router.post('/logout', function (_, res) {
  res.clearCookie('token');
  res.send();
});

// -----------------------------------------------------------------------------

router.get('/info', async function (req, res) {
  const { uuid } = req.body;

  if (!(typeof uuid === 'string' && uuid.length > 0)) {
    res.sendStatus(400);
    return;
  }

  const record = await db.user.findFirst({
    where: {
      uuid,
    },
  });

  if (record === null) {
    res.sendStatus(404);
    return;
  }

  const { uname, fname, mname, lname } = record;

  res.json({
    uname,
    fname,
    mname,
    lname,
  });
});

router.get('/user', async function (req, res) {
  const { uuid } = req.body;

  if (!(typeof uuid === 'string' && uuid.length > 0)) {
    res.sendStatus(400);
    return;
  }

  const record = await db.user.findFirst({
    where: {
      uuid,
    },
  });

  if (record === null) {
    res.sendStatus(404);
    return;
  }

  res.json({
    uuid,
    role: record.role,
  });
});

export default router;
