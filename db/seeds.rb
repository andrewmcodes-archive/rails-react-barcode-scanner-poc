# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.create([
  {name: 'Product 1', description: 'Product 1 description', barcode: '070989105591'},
  {name: 'Product 2', description: 'Product 2 description', barcode: '9780345816023'},
  {name: 'Product 3', description: 'Product 3 description', barcode: '9780062884022'},
])
