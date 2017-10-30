import {Map} from 'immutable'

export function arrToMap(arr, DataRecord) {
    return arr.reduce((acc, item) => acc.set(item.id, DataRecord ? new DataRecord(item) : item), new Map({}))
}

export function fillList(list, startPos, upTo, fromList) {
    console.log("fillits", list)
    return list
        .setSize(upTo)
        .splice(startPos, fromList.size, ...fromList.toArray())
}