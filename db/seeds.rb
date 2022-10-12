puts "🌱 Seeding users..."
User.create(name: "paul", password_digest:1234, email:"paul@gmail.com")

puts "🌱 Seeding expenses..."

Expense.create(name: "barber", cost: 250, user_id:1)
Expense.create(name: "books", cost: 1000, user_id:1)
Expense.create(name: "grocery shopping", cost: 2000, user_id:1)


puts "🌱 Done seeding..."