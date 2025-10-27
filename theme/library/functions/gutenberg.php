<?php

// This function disabled the gutenberg editor for all pages (except one for demonstration purposes).
function theme_enable_gutenberg_post_meta($can_edit, $post)
{
    if ($post->post_name === 'block-editor-example') {
        return true;
    }
    return false;
}
add_filter('use_block_editor_for_post', 'theme_enable_gutenberg_post_meta', 10, 2);
