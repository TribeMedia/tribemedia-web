import { NextResponse } from 'next/server';
import { Application } from '@/types/applications';

const applications: Application[] = [
  {
    id: "034cd99d-7094-4c09-87d8-dae8c7378f31",
    key: "my-assistant",
    data: {
      url: "/my-assistant",
      applicationType: "application"
    },
    name: "Prometheus Assistant",
    created_at: "2024-06-24T20:51:04.028299+00:00",
    description: "AI assistant to help you make the most out of Prometheus.",
    application_type_id: null,
    icon_url: "https://ipfs.prometheus-platform.io/ipfs/QmYqQJaz3P9WwxrRtYcW7rxrws4Srx2xJhAxXFuGUz9aDt",
    cover_url: "https://ipfs.prometheus-platform.io/ipfs/QmYyFNAjWno97vbjYiXGbogGabVU6fjwSG8mhuQMNWo51V",
    ai_context: null
  },
  {
    id: "034cd99d-7094-4c09-87d8-dae8c7378f32",
    key: "dify",
    data: {
      url: "https://dify.prometheus-platform.io",
      applicationType: "web"
    },
    name: "Dify AI",
    created_at: "2024-06-24T20:51:04.028299+00:00",
    description: "AI application tool that provides a way to visually create AI applications and deploy them.",
    application_type_id: null,
    icon_url: "https://ipfs.prometheus-platform.io/ipfs/QmQgUUYrjqFNiW5D83wAwgS9m43cFh4UjEzwNB2nbd7BGe",
    cover_url: "https://ipfs.prometheus-platform.io/ipfs/QmWZ9BJdybPvQdu45gS4Yc3WPcARGXgiZjGjdQ2o9hCkwS",
    ai_context: null
  }
];

export async function GET() {
  return NextResponse.json(applications);
}