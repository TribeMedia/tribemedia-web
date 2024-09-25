export interface ApplicationType {
    id: string;
    name: string;
    key: string;
    schema: Record<string, unknown>;
    created_at: string;
}
  
export interface Application {
    id: string;
    application_type_id: string | null;
    name: string;
    description: string | null;
    key: string;
    data: {
      url: string;
      applicationType: 'web' | 'application';
    };
    created_at: string;
    icon_url: string | null;
    cover_url: string | null;
    ai_context: string | null;
}