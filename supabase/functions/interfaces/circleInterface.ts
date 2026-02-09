// import { mockErrors } from "asset:///node/undici/index.d.ts";

export interface CircleClientInterface {
  fetchUsuarios(): Promise<PaginatedResponse>;
}

export interface PaginatedResponse {
  page: number;
  per_page: number;
  has_next_page: boolean;
  count: number;
  page_count: number;
  records: UserRecord[];
}

export interface UserRecord {
  first_name: string;
  last_name: string | null;
  headline: string | null;
  created_at: string;
  updated_at: string;
  community_id: number;
  last_seen_at: string;
  profile_confirmed_at: string;
  id: number;
  profile_url: string;
  public_uid: string;
  profile_fields: ProfileField[];
  flattened_profile_fields: FlattenedProfileFields;
  avatar_url: string | null;
  user_id: number;
  name: string;
  email: string;
  accepted_invitation: string;
  active: boolean;
  sso_provider_user_id: string | null;
  posts_count: number;
  comments_count: number;
  gamification_stats: GamificationStats;
  member_tags: MemberTag[]; // Substituir por interface específica se houver dados
}

export interface MemberTag{
  name: string,
  id: number
}

export interface ProfileField {
  id: number;
  label: string;
  field_type: string;
  key: string;
  placeholder: string;
  description: string;
  required: boolean;
  platform_field: boolean;
  created_at: string;
  updated_at: string;
  community_member_profile_field: CommunityMemberProfileField | null;
  number_options: number | null;
  choices: any[];
  pages: ProfilePage[];
}

export interface CommunityMemberProfileField {
  id: number;
  text: string | null;
  textarea: string | null;
  created_at: string;
  updated_at: string;
  display_value: string;
  community_member_choices: any[];
  location_connections: any[];
}

export interface ProfilePage {
  id: number;
  name: string;
  position: number;
  visible: boolean;
  created_at: string;
  updated_at: string;
}

export interface FlattenedProfileFields {
  bio?: string | null;
  location?: string | null;
  instagram_url?: string | null;
  linkedin_url?: string | null;
  profession?: string | null;
  birthday?: string | null;
  company?: string | null;
}

export interface GamificationStats {
  community_member_id: number;
  total_points: number;
  current_level: number;
  current_level_name: string;
  points_to_next_level: number;
  level_progress: number;
}