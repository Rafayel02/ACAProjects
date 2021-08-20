var treeNodes = [
    { parent: null, id: 0 },
    { parent: 0, id: 1 },
    { parent: 0, id: 2 },
    { parent: 1, id: 3 },
    { parent: 1, id: 4 },
    { parent: 2, id: 5 },
    { parent: 4, id: 6 }
]

function getTreeFromNodes(nodes, res = {}, parentName = null) {
    let childNodes = []
    for(let i = 0; i < array.length; i++) {
        if(nodes[i].parent === parentName) {
            childNodes.push(array[i])
        }
    }

    if(childNodes.length === 0) {
        return {}
    }

    for(let i = 0; i < childNodes.length; i++) {
        let tempID = childNodes[i].id
        res[tempID] = {}
        getTreeFromNodes(nodes, res[tempID], tempID)
    }

    return res
}

console.log(getTreeFromNodes(treeNodes))