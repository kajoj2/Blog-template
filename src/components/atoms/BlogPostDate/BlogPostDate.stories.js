import React from 'react';

import BlogPostDate from './BlogPostDate';

export default {
    title: 'Components/Blog/BlogPostDate',
    component: BlogPostDate
};

const Template = () => <BlogPostDate> 20 September 2020 </BlogPostDate>;

export const BlogPostDateExample = Template.bind({});
