import React from 'react';

import BlogPostTitle from './BlogPostTitle';

export default {
    title: 'Components/Blog/BlogPostTitle',
    component: BlogPostTitle
};

const Template = () => <BlogPostTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper id risus ut venenatis </BlogPostTitle>;

export const BlogPostTitleExample = Template.bind({});
