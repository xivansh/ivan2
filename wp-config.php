<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

define('WP_HOME','http://192.168.188.120/ivan2/');
define('WP_SITEURL','http://192.168.188.120/ivan2/');

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ivandb_wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'lux0dev0' );

/** Database hostname */
define( 'DB_HOST', '' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'd96Ms,z)l#`H`w)IuCTq&,G7,q#L82vkm}+&D;EDi;;yS7k&$p8_V.QgJ6$kZ;0v' );
define( 'SECURE_AUTH_KEY',  'p?HKv6$-s!lo>>xv}Om0^+O;0m!J<1rC,D&[d>Pp%@VN%Wghn8@HTJG7Ow?~U1:F' );
define( 'LOGGED_IN_KEY',    'Rp{th;@qf=qsgK]WS6Mk@>|}7VYCQgt[PWww}zTm Rt&?R!NAvnQT[sM>US<AzyX' );
define( 'NONCE_KEY',        '>*qv5]ZXya*KYSa sfQ{ile?reC,F<US[|$b*Xo1ooYYFW^/CJjX,5u/~vWyRFqF' );
define( 'AUTH_SALT',        'kHtiU{#]C,5.FG#Y7t|m N}=*V3,)v@HLwA^f$pFVsQxF+Zk?D3?_gZ516u?IM=%' );
define( 'SECURE_AUTH_SALT', '>>Iu4Xv-W;f$O]#lgLva[RSGV&-?%t7_%Tj;w7EAY9m?R8,Roq5;OoFWby+IJaFg' );
define( 'LOGGED_IN_SALT',   '[eJJoF@4SsI/f SvQ:lR{G.;<R`!8.naU}i)_&c@-/,r) ^gT-nP^?)f]/j]#%En' );
define( 'NONCE_SALT',       ' rn3JH03wAMPifSV+F=-Yn(o}|w*{it$zCZgO0Q:J/Vhk5O)+a#_%KUjOla_w|{8' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
