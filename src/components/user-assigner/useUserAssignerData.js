import { useEffect, useMemo, useState } from 'react'
import { mapSelectedDataAvatar, mapSelectedDataName } from './utils'

export function useUserAssignerData(
    dontSaveOnEntity,
    initialUsers = []
) {
    const [userList, setUserList] = useState(initialUsers)

    useEffect(() => {
        if (dontSaveOnEntity) {
            setUserList(initialUsers)
        }
    }, [initialUsers])

    const selectedDataList = userList

    const selectedAvatarMapped = useMemo(
        () => mapSelectedDataAvatar(selectedDataList),
        [selectedDataList]
    )
    const selectedNameMapped = useMemo(
        () => mapSelectedDataName(selectedDataList),
        [selectedDataList]
    )

    return {
        selectedAvatarMapped,
        selectedNameMapped,
        selectedDataList,
        setUserList,
    }
}
