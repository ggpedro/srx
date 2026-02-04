import {PaginatedResponse} from '../interfaces/circle.ts'

export const MockMembers  = {
  async fetchMembers() : Promise<PaginatedResponse> {
    console.log("🧪 Dados mockados utilizados!");
    return {
    "page": 1,
    "per_page": 100,
    "has_next_page": false,
    "count": 12,
    "page_count": 12,
    "records": [
        {
            "first_name": "Daniel",
            "last_name": "Cruz de Freitas",
            "headline": null,
            "created_at": "2026-02-03T14:45:17.277Z",
            "updated_at": "2026-02-03T15:20:30.906Z",
            "community_id": 446529,
            "last_seen_at": "2026-02-03T15:20:13.000Z",
            "profile_confirmed_at": "2026-02-03T14:47:11.000Z",
            "id": 76322646,
            "profile_url": "https://comunidade.embrapii.org.br/u/34c2ca10",
            "public_uid": "34c2ca10",
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
                    "community_member_profile_field": null,
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467153,
                            "name": "edit_profile",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                        "id": 127353833,
                        "text": null,
                        "textarea": null,
                        "created_at": "2026-02-03T14:47:11.552Z",
                        "updated_at": "2026-02-03T14:47:11.552Z",
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
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                    "community_member_profile_field": null,
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467171,
                            "name": "edit_profile",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": null,
                "location": "",
                "linkedin_url": null,
                "birthday": null
            },
            "avatar_url": null,
            "user_id": 53013716,
            "name": "Daniel Cruz de Freitas",
            "email": "daniel.freitas@embrapii.org.br",
            "accepted_invitation": "2026-02-03 14:45:16 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 0,
            "comments_count": 1,
            "gamification_stats": {
                "community_member_id": 76322646,
                "total_points": 0,
                "current_level": 1,
                "current_level_name": "Level 1",
                "points_to_next_level": 10,
                "level_progress": 0
            },
            "member_tags": []
        },
        {
            "first_name": "Alberto",
            "last_name": "Rommell Ocroche",
            "headline": null,
            "created_at": "2026-01-29T18:02:45.790Z",
            "updated_at": "2026-01-29T18:03:22.774Z",
            "community_id": 446529,
            "last_seen_at": "2026-01-29T18:03:47.000Z",
            "profile_confirmed_at": "2026-01-29T18:03:18.000Z",
            "id": 76122117,
            "profile_url": "https://comunidade.embrapii.org.br/u/7c51cbc6",
            "public_uid": "7c51cbc6",
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
                    "community_member_profile_field": null,
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467153,
                            "name": "edit_profile",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                        "id": 126469340,
                        "text": "São Paulo, São Paulo, Brasil",
                        "textarea": null,
                        "created_at": "2026-01-29T18:03:18.575Z",
                        "updated_at": "2026-01-29T18:03:18.575Z",
                        "display_value": "São Paulo, São Paulo, Brasil",
                        "community_member_choices": [],
                        "location_connections": [
                            {
                                "id": 17673039,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 20,
                                    "entity_type": "country",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpJaUE",
                                    "name": "Brasil",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            },
                            {
                                "id": 17673040,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 19,
                                    "entity_type": "region",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpaQ0E",
                                    "name": "São Paulo",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            },
                            {
                                "id": 17673041,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 21,
                                    "entity_type": "place",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpBbDhvSUE",
                                    "name": "São Paulo",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            }
                        ]
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467156,
                            "name": "edit_profile",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                    "community_member_profile_field": null,
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467171,
                            "name": "edit_profile",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": null,
                "location": "São Paulo, São Paulo, Brasil",
                "linkedin_url": null,
                "birthday": null
            },
            "avatar_url": null,
            "user_id": 52859140,
            "name": "Alberto Rommell Ocroche",
            "email": "alberto.rommell@embrapii.org.br",
            "accepted_invitation": "2026-01-29 18:02:45 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 0,
            "comments_count": 0,
            "gamification_stats": {
                "community_member_id": 76122117,
                "total_points": 0,
                "current_level": 1,
                "current_level_name": "Level 1",
                "points_to_next_level": 10,
                "level_progress": 0
            },
            "member_tags": []
        },
        {
            "first_name": "Leonardo",
            "last_name": "Radis Alves Silva",
            "headline": null,
            "created_at": "2026-01-28T12:34:59.854Z",
            "updated_at": "2026-02-03T14:26:29.164Z",
            "community_id": 446529,
            "last_seen_at": "2026-02-03T15:25:23.000Z",
            "profile_confirmed_at": "2026-01-28T12:36:24.000Z",
            "id": 76006927,
            "profile_url": "https://comunidade.embrapii.org.br/u/0e8ca509",
            "public_uid": "0e8ca509",
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
                        "id": 126077630,
                        "text": null,
                        "textarea": "",
                        "created_at": "2026-01-28T12:36:24.040Z",
                        "updated_at": "2026-01-28T12:36:24.040Z",
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
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                        "id": 126077631,
                        "text": "Brasília, Distrito Federal, Brasil",
                        "textarea": null,
                        "created_at": "2026-01-28T12:36:24.059Z",
                        "updated_at": "2026-01-28T12:36:24.059Z",
                        "display_value": "Brasília, Distrito Federal, Brasil",
                        "community_member_choices": [],
                        "location_connections": [
                            {
                                "id": 17627775,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 20,
                                    "entity_type": "country",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpJaUE",
                                    "name": "Brasil",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            },
                            {
                                "id": 17627776,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 266,
                                    "entity_type": "region",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpKQ0E",
                                    "name": "Distrito Federal",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            },
                            {
                                "id": 17627777,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 267,
                                    "entity_type": "place",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpYa2dn",
                                    "name": "Brasília",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            }
                        ]
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467156,
                            "name": "edit_profile",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                        "id": 126077633,
                        "text": "https://www.linkedin.com/in/leonardo-radis",
                        "textarea": null,
                        "created_at": "2026-01-28T12:36:24.088Z",
                        "updated_at": "2026-01-28T12:36:24.088Z",
                        "display_value": "https://www.linkedin.com/in/leonardo-radis",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467171,
                            "name": "edit_profile",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": "",
                "location": "Brasília, Distrito Federal, Brasil",
                "linkedin_url": "https://www.linkedin.com/in/leonardo-radis",
                "birthday": null
            },
            "avatar_url": "https://app.circle.so/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCQ1NKUXdnPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4678561ab7ebcbc7e30b9ca7356566f0f8cdf9bc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2Q25OaGRtVnlld1k2Q25OMGNtbHdWQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--67365f61f655fbc86c65a51f2e9992ab818c41cd/1722545290860.jpg",
            "user_id": 52781364,
            "name": "Leonardo Radis Alves Silva",
            "email": "leonardo.silva@embrapii.org.br",
            "accepted_invitation": "2026-01-28 12:34:59 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 1,
            "comments_count": 0,
            "gamification_stats": {
                "community_member_id": 76006927,
                "total_points": 1,
                "current_level": 1,
                "current_level_name": "Level 1",
                "points_to_next_level": 9,
                "level_progress": 10
            },
            "member_tags": []
        },
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
            "profile_url": "https://comunidade.embrapii.org.br/u/f03d9f07",
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
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": "",
                "location": "",
                "linkedin_url": "",
                "birthday": null
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
        },
        {
            "first_name": "Luan",
            "last_name": null,
            "headline": null,
            "created_at": "2026-01-05T17:51:40.738Z",
            "updated_at": "2026-01-21T18:08:57.712Z",
            "community_id": 446529,
            "last_seen_at": "2026-02-02T12:40:06.000Z",
            "profile_confirmed_at": "2026-01-05T19:59:26.000Z",
            "id": 74723831,
            "profile_url": "https://comunidade.embrapii.org.br/u/1675c912",
            "public_uid": "1675c912",
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
                        "id": 120851945,
                        "text": null,
                        "textarea": "",
                        "created_at": "2026-01-05T19:59:26.037Z",
                        "updated_at": "2026-01-05T19:59:26.037Z",
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
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                        "id": 120851946,
                        "text": null,
                        "textarea": null,
                        "created_at": "2026-01-05T19:59:26.049Z",
                        "updated_at": "2026-01-05T19:59:26.049Z",
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
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                        "id": 120851948,
                        "text": "",
                        "textarea": null,
                        "created_at": "2026-01-05T19:59:26.061Z",
                        "updated_at": "2026-01-05T19:59:26.061Z",
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
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": "",
                "location": "",
                "linkedin_url": "",
                "birthday": null
            },
            "avatar_url": "https://app.circle.so/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCTEZzNmdjPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--fcbbf98e1a3bfa1a9409723b83a2b82be65f3750/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2Q25OaGRtVnlld1k2Q25OMGNtbHdWQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--86d5a93b1fb9d9a40ce4e61c041294c46ab790a5/avatar_74723831.jpg",
            "user_id": 28017427,
            "name": "Luan",
            "email": "luansaldanha@gmail.com",
            "accepted_invitation": "2025-03-10 11:10:16 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 0,
            "comments_count": 0,
            "gamification_stats": {
                "community_member_id": 74723831,
                "total_points": 0,
                "current_level": 1,
                "current_level_name": "Level 1",
                "points_to_next_level": 10,
                "level_progress": 0
            },
            "member_tags": []
        },
        {
            "first_name": "Daniele",
            "last_name": "Vidal",
            "headline": null,
            "created_at": "2026-01-05T17:47:54.163Z",
            "updated_at": "2026-01-28T12:38:45.591Z",
            "community_id": 446529,
            "last_seen_at": "2026-01-29T13:24:29.000Z",
            "profile_confirmed_at": "2026-01-28T12:38:44.000Z",
            "id": 74723640,
            "profile_url": "https://comunidade.embrapii.org.br/u/93061a47",
            "public_uid": "93061a47",
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
                        "id": 126078062,
                        "text": null,
                        "textarea": "",
                        "created_at": "2026-01-28T12:38:44.399Z",
                        "updated_at": "2026-01-28T12:38:44.399Z",
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
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                        "id": 126078063,
                        "text": null,
                        "textarea": null,
                        "created_at": "2026-01-28T12:38:44.432Z",
                        "updated_at": "2026-01-28T12:38:44.432Z",
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
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                        "id": 126078065,
                        "text": "",
                        "textarea": null,
                        "created_at": "2026-01-28T12:38:44.446Z",
                        "updated_at": "2026-01-28T12:38:44.446Z",
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
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": "",
                "location": "",
                "linkedin_url": "",
                "birthday": null
            },
            "avatar_url": "https://app.circle.so/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCSUovUXdnPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e139afa18b7716f3003517d490bdc69a581f3da8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lKYW5CbFp3WTZCa1ZVT2hSeVpYTnBlbVZmZEc5ZmJHbHRhWFJiQjJrQ0xBRnBBaXdCT2dwellYWmxjbnNHT2dwemRISnBjRlE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--ef295ed08e817a599d692fd6d8761673d3ed547f/WhatsApp%20Image%202025-11-12%20at%2014.42.58.jpeg",
            "user_id": 51884612,
            "name": "Daniele Vidal",
            "email": "daniele.vidal@embrapii.org.br",
            "accepted_invitation": "2026-01-28 12:36:37 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 0,
            "comments_count": 0,
            "gamification_stats": {
                "community_member_id": 74723640,
                "total_points": 0,
                "current_level": 1,
                "current_level_name": "Level 1",
                "points_to_next_level": 10,
                "level_progress": 0
            },
            "member_tags": []
        },
        {
            "first_name": "Luan",
            "last_name": "Saldanha",
            "headline": null,
            "created_at": "2026-01-05T17:47:53.457Z",
            "updated_at": "2026-01-27T19:56:07.952Z",
            "community_id": 446529,
            "last_seen_at": "2026-02-02T14:06:52.000Z",
            "profile_confirmed_at": "2026-01-27T19:04:00.000Z",
            "id": 74723638,
            "profile_url": "https://comunidade.embrapii.org.br/u/4265cf35",
            "public_uid": "4265cf35",
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
                        "id": 120819607,
                        "text": null,
                        "textarea": "",
                        "created_at": "2026-01-05T17:49:50.187Z",
                        "updated_at": "2026-01-05T17:49:50.187Z",
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
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                        "id": 120819608,
                        "text": "Brasília, Distrito Federal, Brasil",
                        "textarea": null,
                        "created_at": "2026-01-05T17:49:50.219Z",
                        "updated_at": "2026-01-27T19:04:00.644Z",
                        "display_value": "Brasília, Distrito Federal, Brasil",
                        "community_member_choices": [],
                        "location_connections": [
                            {
                                "id": 17607666,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 20,
                                    "entity_type": "country",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpJaUE",
                                    "name": "Brasil",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            },
                            {
                                "id": 17607667,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 266,
                                    "entity_type": "region",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpKQ0E",
                                    "name": "Distrito Federal",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            },
                            {
                                "id": 17607668,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 267,
                                    "entity_type": "place",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpYa2dn",
                                    "name": "Brasília",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            }
                        ]
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467156,
                            "name": "edit_profile",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                        "id": 120819610,
                        "text": "",
                        "textarea": null,
                        "created_at": "2026-01-05T17:49:50.247Z",
                        "updated_at": "2026-01-05T17:49:50.247Z",
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
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                    "community_member_profile_field": {
                        "id": 120819612,
                        "text": "",
                        "textarea": null,
                        "created_at": "2026-01-05T17:49:50.277Z",
                        "updated_at": "2026-01-05T17:49:50.277Z",
                        "display_value": "",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467177,
                            "name": "edit_profile",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": "",
                "location": "Brasília, Distrito Federal, Brasil",
                "linkedin_url": "",
                "birthday": ""
            },
            "avatar_url": "https://app.circle.so/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRENEUUFnPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7821aabec86d046be07fe96df004907ae4986b04/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2Q25OaGRtVnlld1k2Q25OMGNtbHdWQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--86d5a93b1fb9d9a40ce4e61c041294c46ab790a5/Luan%20Saldanha%20(terno%20preto)%20(1).png",
            "user_id": 29980783,
            "name": "Luan Saldanha",
            "email": "luan.saldanha@embrapii.org.br",
            "accepted_invitation": "2025-05-02 13:16:02 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 10,
            "comments_count": 0,
            "gamification_stats": {
                "community_member_id": 74723638,
                "total_points": 3,
                "current_level": 1,
                "current_level_name": "Level 1",
                "points_to_next_level": 7,
                "level_progress": 30
            },
            "member_tags": []
        },
        {
            "first_name": "Pedro",
            "last_name": "Dias",
            "headline": null,
            "created_at": "2026-01-05T17:47:53.355Z",
            "updated_at": "2026-02-03T14:22:26.259Z",
            "community_id": 446529,
            "last_seen_at": "2026-02-04T17:12:48.000Z",
            "profile_confirmed_at": "2026-01-05T19:23:25.000Z",
            "id": 74723637,
            "profile_url": "https://comunidade.embrapii.org.br/u/b760756e",
            "public_uid": "b760756e",
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
                        "id": 120819439,
                        "text": null,
                        "textarea": "Olá! \n\nSou Analista de Inovação Industrial na Embrapii e um dos responsáveis pela criação da comunidade, estou aqui para ajudar na criação do Ecossistema da Rede Embrapii\n\nSinta-se a vontade para me enviar feedbacks, pelo direct ou pelos canais abaixo:\nE-mail: pedro.dias@embrapii.org.br\nWhatsapp: (61) 98182-8322",
                        "created_at": "2026-01-05T17:49:32.206Z",
                        "updated_at": "2026-01-23T13:34:37.453Z",
                        "display_value": "Olá! \n\nSou Analista de Inovação Industrial na Embrapii e um dos responsáveis pela criação da comunidade, estou aqui para ajudar na criação do Ecossistema da Rede Embrapii\n\nSinta-se a vontade para me enviar feedbacks, pelo direct ou pelos canais abaixo:\nE-mail: pedro.dias@embrapii.org.br\nWhatsapp: (61) 98182-8322",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467153,
                            "name": "edit_profile",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                        "id": 120819440,
                        "text": "Brasília, Distrito Federal, Brasil",
                        "textarea": null,
                        "created_at": "2026-01-05T17:49:32.221Z",
                        "updated_at": "2026-01-05T19:23:25.376Z",
                        "display_value": "Brasília, Distrito Federal, Brasil",
                        "community_member_choices": [],
                        "location_connections": [
                            {
                                "id": 16961606,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 20,
                                    "entity_type": "country",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpJaUE",
                                    "name": "Brasil",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            },
                            {
                                "id": 16961607,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 266,
                                    "entity_type": "region",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpKQ0E",
                                    "name": "Distrito Federal",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            },
                            {
                                "id": 16961608,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 267,
                                    "entity_type": "place",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpYa2dn",
                                    "name": "Brasília",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            }
                        ]
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467156,
                            "name": "edit_profile",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                        "id": 120819442,
                        "text": "https://www.linkedin.com/in/pgabrieltx/",
                        "textarea": null,
                        "created_at": "2026-01-05T17:49:32.235Z",
                        "updated_at": "2026-01-23T13:34:37.470Z",
                        "display_value": "https://www.linkedin.com/in/pgabrieltx/",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467171,
                            "name": "edit_profile",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                    "community_member_profile_field": {
                        "id": 120819444,
                        "text": "",
                        "textarea": null,
                        "created_at": "2026-01-05T17:49:32.247Z",
                        "updated_at": "2026-01-05T17:49:32.247Z",
                        "display_value": "",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467177,
                            "name": "edit_profile",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": "Olá! \n\nSou Analista de Inovação Industrial na Embrapii e um dos responsáveis pela criação da comunidade, estou aqui para ajudar na criação do Ecossistema da Rede Embrapii\n\nSinta-se a vontade para me enviar feedbacks, pelo direct ou pelos canais abaixo:\nE-mail: pedro.dias@embrapii.org.br\nWhatsapp: (61) 98182-8322",
                "location": "Brasília, Distrito Federal, Brasil",
                "linkedin_url": "https://www.linkedin.com/in/pgabrieltx/",
                "birthday": ""
            },
            "avatar_url": "https://app.circle.so/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCRzhCTVFnPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--03ba7d0866df081ce53a203699cc1bdc716c9ea1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2Q25OaGRtVnlld1k2Q25OMGNtbHdWQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--67365f61f655fbc86c65a51f2e9992ab818c41cd/5842ec1e-78e5-4c80-b925-970765206e28.jpg",
            "user_id": 42680328,
            "name": "Pedro Dias",
            "email": "pedro.dias@embrapii.org.br",
            "accepted_invitation": "2025-10-14 12:15:31 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 9,
            "comments_count": 0,
            "gamification_stats": {
                "community_member_id": 74723637,
                "total_points": 1,
                "current_level": 1,
                "current_level_name": "Level 1",
                "points_to_next_level": 9,
                "level_progress": 10
            },
            "member_tags": []
        },
        {
            "first_name": "Claudomir",
            "last_name": null,
            "headline": "",
            "created_at": "2025-12-02T18:39:56.050Z",
            "updated_at": "2026-02-02T14:01:30.232Z",
            "community_id": 446529,
            "last_seen_at": "2025-12-02T19:03:20.000Z",
            "profile_confirmed_at": "2025-12-02T18:44:08.000Z",
            "id": 73423535,
            "profile_url": "https://comunidade.embrapii.org.br/u/f67d5669",
            "public_uid": "f67d5669",
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
                        "id": 115153726,
                        "text": null,
                        "textarea": "",
                        "created_at": "2025-12-02T18:44:08.364Z",
                        "updated_at": "2025-12-02T18:44:08.364Z",
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
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                        "id": 115153727,
                        "text": null,
                        "textarea": null,
                        "created_at": "2025-12-02T18:44:08.418Z",
                        "updated_at": "2025-12-02T18:44:08.418Z",
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
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                        "id": 115153732,
                        "text": "",
                        "textarea": null,
                        "created_at": "2025-12-02T18:44:08.520Z",
                        "updated_at": "2025-12-02T18:44:08.520Z",
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
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                    "community_member_profile_field": {
                        "id": 120819817,
                        "text": "",
                        "textarea": null,
                        "created_at": "2026-01-05T17:50:32.562Z",
                        "updated_at": "2026-01-05T17:50:32.562Z",
                        "display_value": "",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467177,
                            "name": "edit_profile",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": "",
                "location": "",
                "linkedin_url": "",
                "birthday": ""
            },
            "avatar_url": "https://app.circle.so/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCS0pZYmdjPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7d0251796fa79b65c4d0c4614b9b05f4031a9031/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2Q25OaGRtVnlld1k2Q25OMGNtbHdWQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--67365f61f655fbc86c65a51f2e9992ab818c41cd/Claudicio.jpg",
            "user_id": 50968831,
            "name": "Claudomir",
            "email": "kadoli2197@datehype.com",
            "accepted_invitation": "2025-12-02 18:43:55 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 0,
            "comments_count": 0,
            "gamification_stats": {
                "community_member_id": 73423535,
                "total_points": 2,
                "current_level": 1,
                "current_level_name": "Level 1",
                "points_to_next_level": 8,
                "level_progress": 20
            },
            "member_tags": []
        },
        {
            "first_name": "Beltrana",
            "last_name": null,
            "headline": "",
            "created_at": "2025-12-02T18:39:53.615Z",
            "updated_at": "2026-01-28T13:29:46.229Z",
            "community_id": 446529,
            "last_seen_at": "2026-01-28T18:56:58.000Z",
            "profile_confirmed_at": "2025-12-02T18:45:06.000Z",
            "id": 73423533,
            "profile_url": "https://comunidade.embrapii.org.br/u/634e3dfa",
            "public_uid": "634e3dfa",
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
                        "id": 115153990,
                        "text": null,
                        "textarea": "",
                        "created_at": "2025-12-02T18:45:06.568Z",
                        "updated_at": "2025-12-02T18:45:06.568Z",
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
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                        "id": 115153991,
                        "text": null,
                        "textarea": null,
                        "created_at": "2025-12-02T18:45:06.591Z",
                        "updated_at": "2025-12-02T18:45:06.591Z",
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
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                        "id": 115153996,
                        "text": "",
                        "textarea": null,
                        "created_at": "2025-12-02T18:45:06.654Z",
                        "updated_at": "2025-12-02T18:45:06.654Z",
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
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                    "community_member_profile_field": {
                        "id": 120819896,
                        "text": "",
                        "textarea": null,
                        "created_at": "2026-01-05T17:50:49.760Z",
                        "updated_at": "2026-01-05T17:50:49.760Z",
                        "display_value": "",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467177,
                            "name": "edit_profile",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": "",
                "location": "",
                "linkedin_url": "",
                "birthday": ""
            },
            "avatar_url": "https://app.circle.so/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCTXBiYmdjPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--69499b0c4ad8e2f7d05333d62c40adc08eacc078/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2Q25OaGRtVnlld1k2Q25OMGNtbHdWQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--67365f61f655fbc86c65a51f2e9992ab818c41cd/Beltricia.jpg",
            "user_id": 50968829,
            "name": "Beltrana",
            "email": "becinax399@besenica.com",
            "accepted_invitation": "2025-12-02 18:44:56 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 0,
            "comments_count": 0,
            "gamification_stats": {
                "community_member_id": 73423533,
                "total_points": 2,
                "current_level": 1,
                "current_level_name": "Level 1",
                "points_to_next_level": 8,
                "level_progress": 20
            },
            "member_tags": []
        },
        {
            "first_name": "Adelmo",
            "last_name": null,
            "headline": "",
            "created_at": "2025-12-02T18:39:51.718Z",
            "updated_at": "2026-01-29T18:52:13.120Z",
            "community_id": 446529,
            "last_seen_at": "2026-01-27T19:06:06.000Z",
            "profile_confirmed_at": "2025-12-02T18:42:50.000Z",
            "id": 73423529,
            "profile_url": "https://comunidade.embrapii.org.br/u/63e9747e",
            "public_uid": "63e9747e",
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
                        "id": 115153442,
                        "text": null,
                        "textarea": "",
                        "created_at": "2025-12-02T18:42:50.141Z",
                        "updated_at": "2025-12-02T18:42:50.141Z",
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
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                        "id": 115153443,
                        "text": null,
                        "textarea": null,
                        "created_at": "2025-12-02T18:42:50.164Z",
                        "updated_at": "2025-12-02T18:42:50.164Z",
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
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                        "id": 115153448,
                        "text": "",
                        "textarea": null,
                        "created_at": "2025-12-02T18:42:50.227Z",
                        "updated_at": "2025-12-02T18:42:50.227Z",
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
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                    "community_member_profile_field": {
                        "id": 120820038,
                        "text": "",
                        "textarea": null,
                        "created_at": "2026-01-05T17:51:11.405Z",
                        "updated_at": "2026-01-05T17:51:11.405Z",
                        "display_value": "",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467177,
                            "name": "edit_profile",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": "",
                "location": "",
                "linkedin_url": "",
                "birthday": ""
            },
            "avatar_url": "https://app.circle.so/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCSkpWYmdjPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9fb815724754bc905ba5eb3d3b6f6585aa6ef2fb/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2Q25OaGRtVnlld1k2Q25OMGNtbHdWQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--67365f61f655fbc86c65a51f2e9992ab818c41cd/Adelmo.jpg",
            "user_id": 50968825,
            "name": "Adelmo",
            "email": "nasafe7742@badfist.com",
            "accepted_invitation": "2025-12-02 18:42:37 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 0,
            "comments_count": 0,
            "gamification_stats": {
                "community_member_id": 73423529,
                "total_points": 1,
                "current_level": 1,
                "current_level_name": "Level 1",
                "points_to_next_level": 9,
                "level_progress": 10
            },
            "member_tags": [
                {
                    "name": "Centro de Competência",
                    "id": 208105
                },
                {
                    "name": "Unidade",
                    "id": 219763
                }
            ]
        },
        {
            "first_name": "Embrapii",
            "last_name": null,
            "headline": "Inovação e Pesquisa",
            "created_at": "2025-11-26T19:27:05.617Z",
            "updated_at": "2026-01-20T14:16:28.437Z",
            "community_id": 446529,
            "last_seen_at": "2026-01-27T14:16:40.000Z",
            "profile_confirmed_at": "2025-11-26T19:27:05.000Z",
            "id": 73161866,
            "profile_url": "https://comunidade.embrapii.org.br/u/dc1539b3",
            "public_uid": "dc1539b3",
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
                        "id": 114030053,
                        "text": null,
                        "textarea": "https://embrapii.org.br/",
                        "created_at": "2025-11-27T13:31:08.434Z",
                        "updated_at": "2025-11-27T13:31:08.434Z",
                        "display_value": "https://embrapii.org.br/",
                        "community_member_choices": [],
                        "location_connections": []
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467153,
                            "name": "edit_profile",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.701Z",
                            "updated_at": "2026-01-28T13:37:10.999Z"
                        },
                        {
                            "id": 15467154,
                            "name": "profile_view",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.704Z",
                            "updated_at": "2026-01-28T13:37:11.053Z"
                        },
                        {
                            "id": 15467152,
                            "name": "signup",
                            "position": 3,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.698Z",
                            "updated_at": "2026-01-28T13:38:11.098Z"
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
                        "id": 114030054,
                        "text": "Brasília, Distrito Federal, Brasil",
                        "textarea": null,
                        "created_at": "2025-11-27T13:31:08.471Z",
                        "updated_at": "2025-11-27T13:31:08.471Z",
                        "display_value": "Brasília, Distrito Federal, Brasil",
                        "community_member_choices": [],
                        "location_connections": [
                            {
                                "id": 16136405,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 20,
                                    "entity_type": "country",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpJaUE",
                                    "name": "Brasil",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            },
                            {
                                "id": 16136406,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 266,
                                    "entity_type": "region",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpKQ0E",
                                    "name": "Distrito Federal",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            },
                            {
                                "id": 16136407,
                                "set_by_platform": false,
                                "location_entity": {
                                    "id": 267,
                                    "entity_type": "place",
                                    "source": "mapbox_v6",
                                    "source_id": "dXJuOm1ieHBsYzpYa2dn",
                                    "name": "Brasília",
                                    "name_preferred": null,
                                    "language": "pt"
                                }
                            }
                        ]
                    },
                    "number_options": null,
                    "choices": [],
                    "pages": [
                        {
                            "id": 15467156,
                            "name": "edit_profile",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.716Z",
                            "updated_at": "2026-01-28T13:37:11.005Z"
                        },
                        {
                            "id": 15467157,
                            "name": "profile_view",
                            "position": 2,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.718Z",
                            "updated_at": "2026-01-28T13:37:11.060Z"
                        },
                        {
                            "id": 15467155,
                            "name": "signup",
                            "position": 1,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.713Z",
                            "updated_at": "2026-01-28T13:37:10.941Z"
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
                        "id": 114030059,
                        "text": "",
                        "textarea": null,
                        "created_at": "2025-11-27T13:31:08.591Z",
                        "updated_at": "2025-11-27T13:31:08.591Z",
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
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.829Z",
                            "updated_at": "2026-01-28T13:38:11.113Z"
                        },
                        {
                            "id": 15467172,
                            "name": "profile_view",
                            "position": 3,
                            "visible": true,
                            "created_at": "2025-11-26T19:27:05.834Z",
                            "updated_at": "2026-01-28T13:38:11.125Z"
                        },
                        {
                            "id": 15467170,
                            "name": "signup",
                            "position": 2,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.825Z",
                            "updated_at": "2026-01-28T13:38:11.093Z"
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
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.883Z",
                            "updated_at": "2026-01-28T13:38:11.116Z"
                        },
                        {
                            "id": 15467178,
                            "name": "profile_view",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.886Z",
                            "updated_at": "2026-01-28T13:38:11.130Z"
                        },
                        {
                            "id": 15467176,
                            "name": "signup",
                            "position": 4,
                            "visible": false,
                            "created_at": "2025-11-26T19:27:05.878Z",
                            "updated_at": "2026-01-28T13:38:11.104Z"
                        }
                    ]
                }
            ],
            "flattened_profile_fields": {
                "bio": "https://embrapii.org.br/",
                "location": "Brasília, Distrito Federal, Brasil",
                "linkedin_url": "",
                "birthday": null
            },
            "avatar_url": "https://app.circle.so/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCTlZqVkFjPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0dabef01df412cdd36d267744676d82ced72203d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU2Q25OaGRtVnlld1k2Q25OMGNtbHdWQT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--86d5a93b1fb9d9a40ce4e61c041294c46ab790a5/marca_embrapii-vertical.png",
            "user_id": 50776230,
            "name": "Embrapii",
            "email": "centrosdecompetencia@embrapii.org.br",
            "accepted_invitation": "2025-11-26 19:25:41 UTC",
            "active": true,
            "sso_provider_user_id": null,
            "posts_count": 19,
            "comments_count": 0,
            "gamification_stats": {
                "community_member_id": 73161866,
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
