import { useEffect, useState } from 'react'

// Types
import { ProjectDataTypes, ProjectTypes } from '../../../AddTask.interface'

export const useProjects = (getProjects: (page: number, search: string) => ProjectTypes) => {
  const [projects, setProjects] = useState<ProjectDataTypes[]>([])
  const [currentPage, setCurrentPage] = useState(0)
  const [currentLastPage, setCurrentLastPage] = useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const loadProjects = async () => {
    if (currentPage <= currentLastPage) {
      try {
        setLoading(true)
        const { data, page, lastPage } = await getProjects(currentPage, search)
        setCurrentPage(+page + 1)
        !data.length ? setCurrentLastPage(1) : setCurrentLastPage(+lastPage || 1)

        const filteredProjects = <ProjectDataTypes[]>[...data].filter(project => project.client?.clientStatusId !== 3)

        setProjects([...projects, ...filteredProjects])
      } finally {
        setLoading(false)
      }
    }
  }

  const resetValues = () => {
    setCurrentPage(1)
    setProjects([])
  }

  useEffect(() => {
    if (currentPage === 1 && !projects?.length) {
      setLoading(true)
      loadProjects()
    }
  }, [currentPage, projects])

  return {
    projects,
    currentPage,
    setCurrentPage,
    setSearch,
    loading,
    setLoading,
    loadProjects,
    resetValues,
  }
}
