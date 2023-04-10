/* eslint-disable camelcase */
import { ReactElement } from 'react'

export interface PermissionTypes {
  view?: boolean
  edit?: boolean
  create?: boolean
  delete?: boolean
}

export interface Permissions {
  permissions: {
    gantt?: PermissionTypes
    proyectos?: PermissionTypes
    tasks?: PermissionTypes
    notifications?: PermissionTypes
    hours?: PermissionTypes
    users?: PermissionTypes
    settings?: PermissionTypes
    tasks_deadline?: PermissionTypes
    quotations?: PermissionTypes
    project_templates?: PermissionTypes
    passwords?: PermissionTypes
    metrics?: PermissionTypes
    clients?: PermissionTypes
    contacts?: PermissionTypes
    salary?: PermissionTypes
  }
}

export interface Settings {
  settings: {
    allow_in_design_status: boolean
    allow_in_revision_status: boolean
    allow_realtime_update: boolean
    allow_task_father_update: boolean
    block_task_without_project: boolean
    capacity_forecast_days: number
    category_by_company: boolean
    disable_upsells: boolean
    disallow_update_user: boolean
    git_hash: string | null
    has_metabase: boolean
    hours_clients_projects: boolean
    limit_charge_hours: boolean
    lock_finished_project: boolean
    notice_concatenated_tasks: boolean
    reliability: number
    required_brand_product: boolean
    required_deadline: boolean | null
    required_fee: boolean | null
    required_project_estimate: boolean
    set_security_standars: boolean
    timesheet_colors: boolean
    weekends_off: boolean
  }
}

export interface UserContextProps {
  permissions: Permissions | Record<string, unknown>

  settings: Settings | Record<string, unknown>

  lastName: string

  userType: string

  firstName: string

  dailyHours: number

  monthlyHours: number

  isClient: boolean

  remainingHours: number

  id: number | null

  company: string

  role: string
}
export interface UserProviderInterfaceProps {
  /**
   *  Children React element
   */
  children: ReactElement
  /**
   * Usuario autenticado a pasar por el context provider
   */
  user: {
    info: {
      first_name: string

      last_name: string

      type: string

      user_type: string

      daily_hours: number

      monthly_hours: number

      remaining_hours: number

      company: string

      id: number | null

      role: string
    }

    permissions: Permissions | Record<string, unknown>

    settings: Settings | Record<string, unknown>
  }
}
