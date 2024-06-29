const app = Vue.createApp({
    data(){
        return {
            picture: 'https://randomuser.me/portraits/men/1.jpg',
            firstName: 'Michael',
            lastName: 'Johnson',
            email: 'michael.johnson@example.com',
            gender: 'male',
        }
    },
    methods: {
        async getUsers(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results)

            let bckgrndCol = document.querySelector('#app')
            if (results[0].gender == 'male') {
                bckgrndCol.style.backgroundColor = 'steelblue'
            } else {
                bckgrndCol.style.backgroundColor = 'pink'
            }
        
            this.picture = results[0].picture.large
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
        },
    }
})


app.mount('#app')
