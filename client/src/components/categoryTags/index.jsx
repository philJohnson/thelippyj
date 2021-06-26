/** @jsx jsx */
import { Badge, jsx } from "theme-ui";

const CategoryTags = ({categories}) => {
    if(!categories?.nodes) return null

    return <jsx>
        {categories.nodes.map(({name}, i) => (<Badge key={i} ml={1}>{name}</Badge>))}
    </jsx>
}

export default CategoryTags