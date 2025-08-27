export interface NotificationType {
  id: string;
  type: string;
  notifiable_type: string;
  notifiable_id: number;
  data: {
    message_ar: string;
    title_ar: string;
    message_en: string;
    title_en: string;
    user_id: number;
    user_name: string;
    key: string;
    keyId: string;
  };
  read_at: string | null;
  created_at: string;
  updated_at: string;
}
