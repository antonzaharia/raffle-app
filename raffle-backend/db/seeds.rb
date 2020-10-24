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

p1 = Post.create({
    title: "Ford Focus ST3",
    description: "We are proud to present to you a stunning Ford Focus ST3. This car runs and drives perfectly, wheels and bodywork in great condition. This is a great car to take out for a fun drive or head somewhere with the family. Its quick & sounds fantastic.",
    price: "1.99",
    date: "2020-10-25",
    max_tickets: 100,
    image: "https://www.clickcompetitions.co.uk/wp-content/uploads/2020/10/DSC01392.jpg.jpg"
    })
p2 = Post.create({
    title: "Ford Focus ST3",
    description: "We are proud to present to you a stunning Ford Focus ST3. This car runs and drives perfectly, wheels and bodywork in great condition. This is a great car to take out for a fun drive or head somewhere with the family. Its quick & sounds fantastic.",
    price: "1.99",
    date: "2020-10-25",
    max_tickets: 100,
    image: "https://www.clickcompetitions.co.uk/wp-content/uploads/2020/10/DSC01423.jpg"
        })
q1 = Question.create({
    content: "Which of the following cars is an Ford?",
    post: p1
})
q2 = Question.create({
    content: "Which of the following cars is an Audi?",
    post: p2
})
q1.answers.create({content: "Huracan", value: false})
q1.answers.create({content: "Aventador", value: false})
q1.answers.create({content: "Fiesta", value: true})

q2.answers.create({content: "Huracan", value: false})
q2.answers.create({content: "Aventador", value: false})
q2.answers.create({content: "Q8", value: true})