const { createApp } = Vue

createApp({
    data() {
        return {

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            visibility: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            visibility: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            visibility: false,
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            visibility: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            visibility: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            visibility: false,
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            visibility: false,
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            visibility: false,
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            visibility: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            visibility: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visibility: false,
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            visibility: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            visibility: false,
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            visibility: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            visibility: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            visibility: false,
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            visibility: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            visibility: false,
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            visibility: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            visibility: false,
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            visibility: false,
                        }
                    ],
                }
            ],

            // indice attivato
            activeUser: 0,
            // valore del campo di input della ricerca utenti
            filterUsers: '',
            // valore del campo di input del nuovo messaggio da inviare
            newMessage: '',
            // inizzializzo un oggetto che conterrà le informazioni del messaggio che scrivo
            newMessageDescription: {},
            // inizzializzo un oggetto che conterrà le informazioni del messaggio che si genera automaticamente in risposta al messaggio che invio
            newMessageReceivedDescription: {},
        }
    },

    // creo una proprietà computed per creare la reazione che mi farà ottenere solo gli utenti che combaciano con la ricerca effettuata in base a concordanza tra ciò che digito e il nome dei singoli utenti
    computed: {
        userList () {
            if (this.filterUsers.trim().length > 0) {

                return this.contacts.filter((contact) => contact.name.toLowerCase().includes(this.filterUsers.trim().toLowerCase()))
            }

            return this.contacts
        }
    },

    methods: {

        // funzione che eguaglia l'indice dell'utente con l'indice attivo
        changeChatIndex (userIndex) {

            this.activeUser = userIndex;
        },

        // funzione per pushare all'interno dell'array il messaggio digitato nel campo di input
        addNewMessageSent() {

            // condizione per controllare se il campo di input è vuoto
            if (this.newMessage.length > 0) {

                // messaggio che invio dove il valore della proprietà message è uguale al messaggio digitato nel campo di input
                this.newMessageDescription = {
    
                    date: new Date().getHours() + '.' + new Date().getMinutes(),
                    message: this.newMessage,
                    status: 'sent',
                    visibility: false,
                };
                
                // pusho nell'array dei messaggi il nuovo messaggio
                this.contacts[this.activeUser].messages.push(this.newMessageDescription);
    
                this.newMessage = '';

                // funzione che si attiva trascorso un secondo
                setTimeout(this.addNewMessageReceived, 1000);
            }   
        },

        // funzione che utilizzo nel setTimeout per generare in automatico un messaggio di risposta
        addNewMessageReceived() {

            // messaggio di risposta
            this.newMessageReceivedDescription = {

                date: new Date().getHours() + '.' + new Date().getMinutes(),
                message: 'ok',
                status: 'received',
            };

            // pusho nell'array dei messaggi il nuovo messaggio generato automaticamente
            this.contacts[this.activeUser].messages.push(this.newMessageReceivedDescription);
        },

        // funzione per cambiare il valore della proprietà visibility che mi servirà per aggiungere/togliere una classe nell'html
        changeVisibility(message) {

            if (message.visibility == false) {

                message.visibility = true;

            } else if (message.visibility == true) {

                message.visibility = false;
            }
        },

        // funzione per rimuovere il messaggio singolo
        removeMessage(array, i) {

            array.splice(i, 1)
        }
    }
}).mount('#app');