import React from 'react';

import BlogPostTopImage from './BlogPostTopImage';

export default {
    title: 'Components/Blog/BlogPostTopImage',
    component: BlogPostTopImage
};

const Template = () => <BlogPostTopImage imgUrl={"https://images.unsplash.com/photo-1611095973763-414019e72400?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"} />;

export const BlogPostTopImageExample = Template.bind({});
