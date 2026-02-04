import {PaginatedResponse} from '../interfaces/circle.ts'

export const MockMembers  = {
  async fetchMembers() : Promise<PaginatedResponse> {
    console.log("🧪 Dados mockados utilizados!");
    return {
    "page": 1,
    "per_page": 100,
    "has_next_page": false,
    "count": 7,
    "page_count": 7,
    "records": [
        {
            "first_name": "Samily",
            "last_name": "Lopes",
            "headline": null,
            "created_at": "2026-01-22T14:54:18.943Z",
            "updated_at": "2026-01-22T14:55:35.714Z",
            "community_id": 446529,
            "last_seen_at": "2026-01-26T13:44:52.000Z",
            "profile_confirmed_at": "2026-01-22T14:55:30.000Z",
            "id": 75730231,
            "profile_url": "https://embrapii.circle.so/u/f03d9f07",
            "public_uid": "f03d9f07",
            "profile_fields": [
                {
                    "id": 5014787,
                    "label": "Biografia",
                    "field_type": "textarea",
                    "key": "bio",
                    "placeholder": "Conte-nos mais sobre você :)",
                    "description": "Insira uma descrição de sua trajetória e experiências para pessoas que queiram se conectar com você!",
                    "required": false,
                    "platform_field": true,
                    "created_at": "2025-11-26T19:27:05.694Z",
                    "updated_at": "2025-12-17T12:51:19.289Z",
                    "community_member_profile_field": {
                        "id": 124730842,
                        "text": null,
                        "textarea": "",
                        "created_at": "2026-01-22T14:55:30.725Z",
                        "updated_at": "2026-01-22T14:55:30.725Z",
                        "display_value": "",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467153,
                            "name": "edit_profile",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2025-11-26T19:27:05.701Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2025-11-26T19:27:05.704Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2025-11-26T19:27:05.698Z"
                        }
                    ]
                },
                {
                    "id": 5014788,
                    "label": "Cidade",
                    "field_type": "location",
                    "key": "location",
                    "placeholder": "Add your location",
                    "description": "De qual cidade e estado onde você é? (Ex: Brasília, DF)",
                    "required": false,
                    "platform_field": true,
                    "created_at": "2025-11-26T19:27:05.711Z",
                    "updated_at": "2025-12-17T12:49:41.053Z",
                    "community_member_profile_field": {
                        "id": 124730844,
                        "text": null,
                        "textarea": null,
                        "created_at": "2026-01-22T14:55:30.751Z",
                        "updated_at": "2026-01-22T14:55:30.751Z",
                        "display_value": "",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467156,
                            "name": "edit_profile",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2025-11-26T19:27:05.716Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2025-11-26T19:27:05.718Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2025-11-26T19:27:05.713Z"
                        }
                    ]
                },
                {
                    "id": 5014792,
                    "label": "Instagram",
                    "field_type": "link",
                    "key": "instagram_url",
                    "placeholder": "@meu-usuario",
                    "description": "",
                    "required": false,
                    "platform_field": true,
                    "created_at": "2025-11-26T19:27:05.793Z",
                    "updated_at": "2025-12-17T12:48:48.652Z",
                    "community_member_profile_field": {
                        "id": 124730845,
                        "text": "",
                        "textarea": null,
                        "created_at": "2026-01-22T14:55:30.754Z",
                        "updated_at": "2026-01-22T14:55:30.754Z",
                        "display_value": "",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467168,
                            "name": "edit_profile",
                            "position": 5,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.803Z",
                            "updated_at": "2025-12-17T12:49:41.141Z"
                        },
                        {
                            "id": 15467169,
                            "name": "profile_view",
                            "position": 5,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.806Z",
                            "updated_at": "2025-12-17T12:49:41.193Z"
                        },
                        {
                            "id": 15467167,
                            "name": "signup",
                            "position": 5,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.797Z",
                            "updated_at": "2025-12-17T12:49:41.078Z"
                        }
                    ]
                },
                {
                    "id": 5014793,
                    "label": "Linkedin",
                    "field_type": "link",
                    "key": "linkedin_url",
                    "placeholder": "Adicione seu linkedin",
                    "description": "",
                    "required": false,
                    "platform_field": true,
                    "created_at": "2025-11-26T19:27:05.819Z",
                    "updated_at": "2025-12-17T12:47:05.905Z",
                    "community_member_profile_field": {
                        "id": 124730846,
                        "text": "",
                        "textarea": null,
                        "created_at": "2026-01-22T14:55:30.766Z",
                        "updated_at": "2026-01-22T14:55:30.766Z",
                        "display_value": "",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467171,
                            "name": "edit_profile",
                            "position": 6,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2025-12-17T12:49:41.148Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 6,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2025-12-17T12:49:41.199Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 6,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2025-12-17T12:49:41.085Z"
                        }
                    ]
                },
                {
                    "id": 5014794,
                    "label": "Cargo/Profissão",
                    "field_type": "text",
                    "key": "profession",
                    "placeholder": "Qual é seu cargo/profissão?",
                    "description": "Detalhe seu cargo atual na organização",
                    "required": true,
                    "platform_field": false,
                    "created_at": "2025-11-26T19:27:05.850Z",
                    "updated_at": "2025-12-17T12:44:22.792Z",
                    "community_member_profile_field": null,
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467174,
                            "name": "edit_profile",
                            "position": 7,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.858Z",
                            "updated_at": "2025-12-17T12:49:41.155Z"
                        },
                        {
                            "id": 15467175,
                            "name": "profile_view",
                            "position": 7,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.862Z",
                            "updated_at": "2025-12-17T12:49:41.205Z"
                        },
                        {
                            "id": 15467173,
                            "name": "signup",
                            "position": 7,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.854Z",
                            "updated_at": "2025-12-17T12:49:41.091Z"
                        }
                    ]
                },
                {
                    "id": 5014795,
                    "label": "Data de nascimento",
                    "field_type": "text",
                    "key": "birthday",
                    "placeholder": "Sua data de nascimento",
                    "description": "Data de nascimento",
                    "required": false,
                    "platform_field": false,
                    "created_at": "2025-11-26T19:27:05.874Z",
                    "updated_at": "2025-12-17T12:42:12.819Z",
                    "community_member_profile_field": null,
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467177,
                            "name": "edit_profile",
                            "position": 8,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2025-12-17T12:49:41.162Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 8,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2025-12-17T12:49:41.211Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 8,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2025-12-17T12:49:41.098Z"
                        }
                    ]
                },
                {
                    "id": 5014796,
                    "label": "Organização",
                    "field_type": "text",
                    "key": "company",
                    "placeholder": "De qual organização você faz parte?",
                    "description": "Detalhe a instituição/empresa da qual você faz parte",
                    "required": true,
                    "platform_field": false,
                    "created_at": "2025-11-26T19:27:05.900Z",
                    "updated_at": "2025-12-17T12:45:51.930Z",
                    "community_member_profile_field": null,
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467180,
                            "name": "edit_profile",
                            "position": 9,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.911Z",
                            "updated_at": "2025-12-17T12:49:41.170Z"
                        },
                        {
                            "id": 15467181,
                            "name": "profile_view",
                            "position": 9,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.914Z",
                            "updated_at": "2025-12-17T12:49:41.217Z"
                        },
                        {
                            "id": 15467179,
                            "name": "signup",
                            "position": 9,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.905Z",
                            "updated_at": "2025-12-17T12:49:41.118Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": "",
                "location": "",
                "instagram_url": "",
                "linkedin_url": "",
                "profession": null,
                "birthday": null,
                "company": null
            },
            "avatar_url": null,
            "user_id": 52568286,
            "name": "Samily Lopes",
            "email": "samily.lopes@embrapii.org.br",
            "accepted_invitation": "2026-01-22 14:54:18 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 0,
            "comments_count": 0,
            "gamification_stats": {
                "community_member_id": 75730231,
                "total_points": 0,
                "current_level": 1,
                "current_level_name": "Level 1",
                "points_to_next_level": 10,
                "level_progress": 0
            },
            "member_tags": []
        }
    ]
    };
  }
};
