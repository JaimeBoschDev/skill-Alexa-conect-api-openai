{
    "interactionModel": {
        "languageModel": {
            "invocationName": "change fot you skill name",
            "intents": [
                {
                    "name": "OpenAIIntent",
                    "slots": [
                        {
                            "name": "pregunta",
                            "type": "AMAZON.SearchQuery"
                        }
                    ],
                    "samples": [
                        "cuál es tu {pregunta}",
                        "dime sobre {pregunta}",
                        "puedes responder {pregunta}",
                        "qué sabes sobre {pregunta}",
                        "cuáles son los detalles de {pregunta}",
                        "explícame sobre {pregunta}",
                        "necesito información sobre {pregunta}",
                        "sabes algo de {pregunta}",
                        "tienes datos sobre {pregunta}",
                        "me puedes ayudar con {pregunta}",
                        "quisiera saber sobre {pregunta}",
                        "dame detalles de {pregunta}",
                        "puedes explicar {pregunta}",
                        "ayúdame con {pregunta}",
                        "qué significa {pregunta}",
                        "por qué ocurre {pregunta}",
                        "dime qué sabes de {pregunta}",
                        "cuál es la razón de {pregunta}",
                        "dime {pregunta}"
                    ]
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                }
            ],
            "types": []
        }
    }
}
