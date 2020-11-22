# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.delete_all
Question.delete_all
Answer.delete_all
Ticket.delete_all
Cart.delete_all
CartItem.delete_all
User.delete_all
@date = Date.today.strftime("%Y-%m-%d")

admin = User.create(name: "Admin", email: "admin@admin.com", password: "admin", admin: true)

users = [
    {name: "test", email: "test@test.com", password: "test", admin: false},
    {name: "Anton Zaharia", email: "zaharia@example.com", password: "zaharia", admin: false}
]
users.each do |u|
    User.create(u)
end

p1 = Post.create({
    title: "Audi A6 Avant plug-in hybrid",
    description: "We are proud to present to you a stunning Audi A6 Avant plug-in hybrid. This car runs and drives perfectly, wheels and bodywork in great condition. This is a great car to take out for a fun drive or head somewhere with the family. Its quick & sounds fantastic.",
    price: "3.99",
    date: @date,
    max_tickets: 100,
    image: "https://mediacloud.carbuyer.co.uk/image/private/s--p7yl5YtF--/v1595106620/carbuyer/2020/04/a202534_large.jpg"
    })
p2 = Post.create({
    title: "Ford Focus ST3",
    description: "We are proud to present to you a stunning Ford Focus ST3. This car runs and drives perfectly, wheels and bodywork in great condition. This is a great car to take out for a fun drive or head somewhere with the family. Its quick & sounds fantastic.",
    price: "1.99",
    date: @date,
    max_tickets: 100,
    image: "https://www.clickcompetitions.co.uk/wp-content/uploads/2020/10/DSC01423.jpg"
        })
p3 = Post.create({
    title: "Mercedes EQC",
    description: "We are proud to present to you a stunning Mercedes EQC. This car runs and drives perfectly, wheels and bodywork in great condition. This is a great car to take out for a fun drive or head somewhere with the family. Its quick & sounds fantastic.",
    price: "2.99",
    date: @date,
    max_tickets: 100,
    image: "https://car-images.bauersecure.com/pagefiles/87936/mercedes_eqc_001.jpg"
    })
 
q1 = Question.create({
    content: "Which of the following cars is an Audi?",
    post: p1
})
q2 = Question.create({
    content: "Which of the following cars is an Ford?",
    post: p2
})
q3 = Question.create({
    content: "Which of the following cars is an Mercedes?",
    post: p3
})
q1.answers.create({content: "Huracan", value: false})
q1.answers.create({content: "Aventador", value: false})
q1.answers.create({content: "A7 quattro", value: true})

q2.answers.create({content: "Huracan", value: false})
q2.answers.create({content: "Aventador", value: false})
q2.answers.create({content: "Fiesta", value: true})

q3.answers.create({content: "Huracan", value: false})
q3.answers.create({content: "Aventador", value: false})
q3.answers.create({content: "S-Classe", value: true})