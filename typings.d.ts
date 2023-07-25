// import { Ref } from "react";
// import author from "./sanity/schemas/author";
// import category from "./sanity/schemas/category";
// import { Reference } from "sanity";

 type Base = {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
 };

 interface Post extends Base {
    author: Author;
    body: Block[];
    categories: category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
 }

 interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug
 }

 interface Image extends Base {
    _type: "image";
    asset: Reference
    }

  interface Reference extends Base {
    _ref: string;
    _type: "reference";
    }

    interface Slug extends Base {
        _type: "slug";
        current: string;
    }

    interface Block {
        _key: string;
        _type: "block";
        children: Span[];
        markDefs: any[];
        style: "nomal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    }

    interface Span {
        _key: string;
        _type: "span";
        marks: any[];
        text: string;
    }

    interface Category extends Base {
        description: string;
        title: string;
    }

    interface mainImage {
        _type: "image"
        asset: "reference"
    }

    interface Title {
        _type: "string";
        current: string;
    }