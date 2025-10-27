<?php
/**
 * Custom Post Type Example
 * (http://codex.wordpress.org/Function_Reference/register_post_type)
 * This page walks you through creating
 * a custom post type and taxonomies. You
 * can edit this one or copy the following code
 * to create another one.
 *
 * I put this in a separate file so as to
 * keep it organized. I find it easier to edit
 * and change things if they are concentrated
 * in their own file.
 */

// let's create the function for the custom type
function ocupop_projects_post_type()
{
    // creating (registering) the custom type

    register_post_type(
        'team',
        array(
          'labels' => array(
            'name' => __('Team', 'ocupop'), /* This is the Title of the Group */
            'singular_name' => __('Team Member', 'ocupop'), /* This is the individual type */
            'all_items' => __('All Team Members', 'ocupop'), /* the all items menu item */
            'add_new' => __('Add New', 'ocupop'), /* The add new menu item */
            'add_new_item' => __('Add New Team Member', 'ocupop'), /* Add New Display Title */
            'edit' => __('Edit', 'ocupop'), /* Edit Dialog */
            'edit_item' => __('Edit Team', 'ocupop'), /* Edit Display Title */
            'new_item' => __('New Team member', 'ocupop'), /* New Display Title */
            'view_item' => __('View Team', 'ocupop'), /* View Display Title */
            'search_items' => __('Search Team', 'ocupop'), /* Search Custom Type Title */
            'not_found' =>  __('Nothing found in the Database.', 'ocupop'), /* This displays if there are no entries yet */
            'not_found_in_trash' => __('Nothing found in Trash', 'ocupop'), /* This displays if there is nothing in the trash */
            'parent_item_colon' => ''
          ), /* end of arrays */
          'description' => __('Custom post type for team members', 'ocupop'), /* Custom Type Description */
          'public' => true,
          'publicly_queryable' => true,
          'exclude_from_search' => false,
          'show_ui' => true,
          'query_var' => true,
          'menu_position' => 8, /* this is what order you want it to appear in on the left hand side menu */
          'menu_icon'      => 'dashicons-book',
          'rewrite'  => array('slug' => 'team-member', 'with_front' => true), /* you can specify its url slug */
          'has_archive' => 'team', /* you can rename the slug here */
          'capability_type' => 'post',
          'hierarchical' => false,
          'show_in_rest' => true,
          /* the next one is important, it tells what's enabled in the post editor */
          'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt','custom-fields', 'revisions', 'sticky'),


        ) /* end of options */
    ); /* end of register post type */
}
add_action('init', 'ocupop_projects_post_type');



/*
for more information on taxonomies, go here:
http://codex.wordpress.org/Function_Reference/register_taxonomy
*/

// Add Project categories
register_taxonomy(
    'team_category',
    array('team'), /* if you change the name of register_post_type( 'custom_type', then you have to change this */
    array(
    'hierarchical' => true,     /* if this is true, it acts like categories */
    'labels' => array(
      'name' => __('Team Categories', 'ocupop'), /* name of the custom taxonomy */
      'singular_name' => __('Team Category', 'ocupop'), /* single taxonomy name */
      'search_items' =>  __('Search Team Categories', 'ocupop'), /* search title for taxomony */
      'all_items' => __('All Team Categories', 'ocupop'), /* all title for taxonomies */
      'parent_item' => __('Parent Team Category', 'ocupop'), /* parent title for taxonomy */
      'parent_item_colon' => __('Parent Team Category:', 'ocupop'), /* parent taxonomy title */
      'edit_item' => __('Edit Team Category', 'ocupop'), /* edit custom taxonomy title */
      'update_item' => __('Update Team Category', 'ocupop'), /* update title for taxonomy */
      'add_new_item' => __('Add New Team Category', 'ocupop'), /* add new title for taxonomy */
      'new_item_name' => __('New Team Category Name', 'ocupop') /* name title for taxonomy */
    ),
    'show_admin_column' => true,
    'show_ui' => true,
    'query_var' => true,
    // 'rewrite' => array('slug' => 'team_category'),
    'show_in_rest' => true,
    )
);

// Add project tags (these act like categories)
register_taxonomy(
    'team_tag',
    array('team'),
    array(
    'hierarchical' => false,
    'labels' => array(
      'name' => __('Team Tags', 'ocupop'),
      'singular_name' => __('Team Tag', 'ocupop'),
      'search_items' =>  __('Search Team Tags', 'ocupop'),
      'all_items' => __('All Team Tags', 'ocupop'),
      'parent_item' => __('Parent Team Tag', 'ocupop'),
      'parent_item_colon' => __('Parent Team Tag:', 'ocupop'),
      'edit_item' => __('Edit Team Tag', 'ocupop'),
      'update_item' => __('Update Team Tag', 'ocupop'),
      'add_new_item' => __('Add New Team Tag', 'ocupop'),
      'new_item_name' => __('New Team Tag Name', 'ocupop')
    ),
    'show_admin_column' => true,
    'show_ui' => true,
    'query_var' => true,
    )
);





