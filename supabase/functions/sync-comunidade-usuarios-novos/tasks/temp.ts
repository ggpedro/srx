// export async function temp (){
//     const organizacoes = [
//     "AGROTEC-UFMS",
//     "Bioindústria e Bioinsumos - UFT",
//     "BIOTEC-CETENE",
//     "CCM-ITA",
//     "CEAR-UFPB",
//     "CEEI",
//     "CEIA-UFG",
//     "CEINFAR-USP",
//     "CERTI",
//     "CESAR",
//     "CICS Poli-USP",
//     "CIM-UNIFESP",
//     "CIMATEC",
//     "CIn-UFPE",
//     "CNPEM",
//     "COPPE",
//     "CPqD",
//     "CQMED",
//     "CTIM-UFABC",
//     "CTNano-UFMG",
//     "DCC-UFMG",
//     "E-RENOVA - Unicamp",
//     "EDGE-UFAL",
//     "ELDORADO",
//     "EMBRAPA AGROENERGIA",
//     "EMBRAPA ITECH-Agro",
//     "ESALQ",
//     "Escola de Minas - UFOP",
//     "FEMEC-UFU",
//     "FITec BH",
//     "FITec Campinas",
//     "FMRP-USP",
//     "G-Bioforest - UFOPA",
//     "Graphene-UCS",
//     "ICMC - USP-SC",
//     "IF-AM",
//     "IF-BA",
//     "IF-CE",
//     "IF-FLU",
//     "IF-Goiano",
//     "IF-Goiás",
//     "IF-MG",
//     "IF-PB",
//     "IF-RN",
//     "IF-SC - FLN",
//     "IF-SP",
//     "IF-Suldeminas",
//     "IF-TM",
//     "INATEL",
//     "INDT",
//     "InovaAgro-UFPel",
//     "INOVAÇÃO DE FÁRMACOS E VACINAS-UFMG",
//     "inoVARE/UFSC",
//     "INRI-UFSM",
//     "INSTITUTO ATLÂNTICO",
//     "INT",
//     "IPT-Bio",
//     "IPT-Materiais",
//     "IQSint-USP",
//     "ITEC-FURG",
//     "LACTEC",
//     "LESC - UFC",
//     "LITPEG-UFPE",
//     "LSI-TEC",
//     "METRÓPOLE DIGITAL - UFRN",
//     "MOVE-UFSC",
//     "NUTES-UEPB",
//     "Polimeros",
//     "Powertrain-USP",
//     "PROMEXBIO-CETEM",
//     "SENAI ISI BIOMASSA",
//     "SENAI ISI BIOSSINTÉTICOS",
//     "SENAI ISI ELETROQUÍMICA",
//     "SENAI ISI EMBARCADOS",
//     "SENAI ISI ENGENHARIA DE ESTRUTURAS",
//     "SENAI ISI LIGAS ESPECIAIS",
//     "SENAI ISI QUÍMICA VERDE",
//     "SENAI ISI SENSORIAMENTO",
//     "SENAI ISI TICS",
//     "SENAI MANUFATURA, LASER E ROBÓTICA",
//     "SENAI/SP - Distrito Tecnológico",
//     "SIMOB-UFRGS",
//     "TECGRAF",
//     "TECNOGREEN",
//     "UFPA - BIOECONOMIA",
//     "UFSCar - Materiais",
//     "UFV - Fibras Florestais",
//     "USP-IFSC",
//     "VBL IoT E INDÚSTRIA 4.0 - Von Braun",
//     "ZETTA-UFLA",
//     ];

//     const baseBody = {
//     color: "#fbc146",
//     display_format: "label",
//     emoji: "",
//     is_background_enabled: true,
//     is_public: true,
//     name: "", // será sobrescrito
//     display_locations: {
//         member_directory: true,
//         post_bio: true,
//         profile_page: true,
//     },
//     };

//     const API_URL = "https://app.circle.so/api/admin/v2/member_tags";

//     for (const sgOrganizacao of organizacoes) {
//     const body = {
//         ...baseBody,
//         name: sgOrganizacao,
//     };

//     const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${Deno.env.get('COMUNIDADE_KEY')}`,
//         },
//         body: JSON.stringify(body),
//     });

//     if (!response.ok) {
//         console.error(
//         `❌ Erro ao processar ${sgOrganizacao}:`,
//         await response.text()
//         );
//         continue;
//     }

//     console.log(`✅ Processado com sucesso: ${sgOrganizacao}`);
//     }



// }
