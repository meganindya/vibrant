# Theme Colors

The `colors.css` file contains CSS variables representing color hexadecimal values defined at the
`:root`. This file should be imported only once and at the top level module of the application.
Thereafter the variables will be accessible all throughout the runtime of the application. In case of
Storybook, it needs to be imported in the preview configuration file, so that the components can use
the colors.

The `colors.scss` file exports SCSS variables which are just aliases for the corresponding variable
accesses.

All components that require the colors must either directly access the variables using `var(...)` or
use the SCSS aliases (e.g. `$--theme-bg`) after importing `colors.scss`. They must not import the
`colors.css` file.

Currently same sets of variables are configured to be exposed for light and dark themes. Should a need
arise in the future to support dark theme, the dark theme values need to be updated. If more themes
need to be supported, new sets are to be introduced for the corresponding themes with the
`preferred-color-scheme` media query. The said attribute can be updated using JavaScript, hence,
changing themes should equate to a simple change of the attribute in the source code.
