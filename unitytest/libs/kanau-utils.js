function findByUserData(node,key,value){
    if(node.userData&&node.userData[key]==value){return node;}
    if (node.children) {
        for(var i=0;i<node.children.length;i++){var child=node.children[i];var found=findByUserData(child,key,value);if(found!=null){return found;}}
    }
    return undefined;}

function findByName(node,value){if(node.name&&node.name==value){return node;}
    if (node.children) {
        for(var i=0;i<node.children.length;i++){var child=node.children[i];var found=findByName(child,value);if(found!=null){return found;}}
    }
    return undefined;}