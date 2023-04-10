import { UserAssignerAvatarType } from './avatar/UserAssignerAvatar'
import { UserAssignerUserType, UserAssignerEntityType } from './constants'

const EMPTY_CHAR = '-'

export function mapSelectedDataAvatar(data) {
    if (Array.isArray(data)) {
        if (data.length === 0) {
            return {
                type: UserAssignerAvatarType.EMPTY_STATE,
            }
        }

        if (data.length === 1) {
            const {
                roleId,
                remainingHours,
                picture,
                firstName,
                lastName,
                id,
            } = data[0]

            return {
                id,
                type: UserAssignerAvatarType.PHOTO,
                picture,
                remainingHours,
                firstName,
                lastName,
                roleId,
            }
        }

        return {
            type: UserAssignerAvatarType.NUMBER,
            total: data.length,
        }
    }

    if (data) {
        const {
            roleId,
            remainingHours,
            picture,
            firstName,
            lastName,
            id,
        } = data

        return {
            id,
            type: UserAssignerAvatarType.PHOTO,
            picture,
            remainingHours,
            firstName,
            lastName,
            roleId,
        }
    }

    return {
        type: UserAssignerAvatarType.EMPTY_STATE,
    }
}

export function mapSelectedDataName(data) {
    if (!data) {
        return EMPTY_CHAR
    }

    if (Array.isArray(data)) {
        if (!data.length) {
            return EMPTY_CHAR
        }
        const { firstName, lastName } = data[0]
        const morePeople = data.length > 1 ? ` +${data.length - 1}` : ''

        return `${firstName} ${lastName}${morePeople}`
    }

    return `${data.firstName} ${data.lastName}`
}

export function sliceArraMaxElements(_array, maxElements) {
    let array = [..._array]
    let rest = 0

    if (array.length > maxElements) {
        array = _array.slice(0, maxElements)
        rest = _array.slice(array.length)
    }

    return {
        array,
        rest,
    }
}

export function mapGraphQLTypeElement(user, type) {
    const MAP = {
        [UserAssignerUserType.COLLABORATOR]: 'Collaborator',
        [UserAssignerUserType.PM]: 'PM',
        [UserAssignerUserType.FOLLOWER]: 'Follower',
    }

    return MAP[type] || 'User'
}


export function updateDataAdd(cache, entityType, userType, newUser, entityId) {
    // TASK
    if (entityType === UserAssignerEntityType.TASK) {
        const dataType = { ...cache[entityType] }

        if (Array.isArray(dataType[userType])) {
            const nextUsers = [...dataType[userType]]
            nextUsers.push(newUser)

            return {
                ...cache,
                [entityType]: {
                    ...dataType,
                    [userType]: nextUsers,
                },
            }
        }

        return {
            [entityType]: {
                ...dataType,
                [userType]: newUser,
            },
        }
    }

    // SUBTASK
    if (entityType === UserAssignerEntityType.SUBTASK) {
        const subtaskIndex = cache.subtasks.findIndex(
            subtask => Number(subtask._id) === Number(entityId)
        )
        const nextUsers = cache.subtasks[subtaskIndex]['collaborators']
        nextUsers.push(newUser)

        const newSubtasks = [...cache.subtasks]
        newSubtasks[subtaskIndex]['collaborators'] = nextUsers

        return {
            ...cache,
            subtasks: newSubtasks,
        }
    }
}

export function updateDataRemove(
    cache,
    entityType,
    userType,
    newUser,
    entityId
) {
    // TASK
    if (entityType === UserAssignerEntityType.TASK) {
        const dataType = cache[entityType]
        let nextUsers = dataType[userType]

        if (Array.isArray(nextUsers)) {
            nextUsers = nextUsers.filter(
                u => Number(u.id) !== Number(newUser.id)
            )

            return {
                ...cache,
                [entityType]: {
                    ...dataType,
                    [userType]: nextUsers,
                },
            }
        }

        return {
            [entityType]: {
                ...dataType,
                [userType]: null,
            },
        }
    }

    // SUBTASK
    if (entityType === UserAssignerEntityType.SUBTASK) {
        const subtaskIndex = cache.subtasks.findIndex(
            subtask => Number(subtask._id) === Number(entityId)
        )
        const nextUsers = cache.subtasks[subtaskIndex]['collaborators'].filter(
            c => Number(c.id) !== Number(newUser.id)
        )

        const newSubtasks = [...cache.subtasks]
        newSubtasks[subtaskIndex]['collaborators'] = nextUsers

        return {
            ...cache,
            subtasks: newSubtasks,
        }
    }
}

export function calculateMaxYForTooltip(y, tooltipHeight) {
    const win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0]

    const viewportHeight =
        win.innerHeight || docElem.clientHeight || body.clientHeight

    if (y > viewportHeight - tooltipHeight) {
        return viewportHeight - tooltipHeight
    }

    return y
}


export const calculateMaxYForModal = (top, offsetY, height) => {
    const docElem = document.documentElement
    const body = document.getElementsByTagName('body')[0]
    const viewportHeight = window.innerHeight || docElem.clientHeight || body.clientHeight
    const backupOffset = 100

    if (top > viewportHeight - backupOffset - height) {
        return offsetY * 1.5 - height
    }

    return offsetY
}