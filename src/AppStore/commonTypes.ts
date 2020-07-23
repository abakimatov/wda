export type userField = {
  name: string;
  key: string;
  value: string;
  isEdit: boolean;
};
export type registrationUserInputType = {
  login: string;
  password: string;
  respName: string;
  respEmail: string;
  key: string;
};
export type KEY_IN_LIST = {
  value: string;
  roleId: number;
  dateCreated: string;
  dateTo: string;
  roleName: string;
};
export type UserType = {
  name: string;
  key: string;
  value: string;
  isEdit: boolean;
};
export type FrameType = {
  name?: string;
  rusName?: string;
  canEdit: boolean;
  link?: string;
  id?: number;
};
export type FieldType = {
  name: string;
  key: string;
  value: string;
  isEdit: boolean;
};
export type RoleType = {
  id: number;
  name: string;
};
export type StatusType = {
  id: number;
  name: string;
};
export type LicenseParamsType = {
  isActive?: boolean;
  canEdit?: boolean;
  contractReminder?: boolean;
  canInviteWorkers?: boolean;
};