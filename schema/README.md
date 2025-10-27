# The Schema Folder

The "Schema" folder is used when this theme is loaded into our "[WordPress Starter Docker](https://github.com/ocupop/wordpress_starter_docker)" project. It should contain a database.sql file for loading the default wordpress starter build, and a Makefile.theme file, which should have instructions for installing the default plug-ins.

These two files MUST Exist in order to prevent errors when spinning up a new site with Wordpress Starter Docker (Graceful fallbacks are still on our to-do list)