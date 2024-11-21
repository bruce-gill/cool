import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import image1 from '@/assets/images/image1.jpg'
import image2 from '@/assets/images/image2.jpg'
import image3 from '@/assets/images/image3.jpg'
import image4 from '@/assets/images/image4.jpg'
import image5 from '@/assets/images/image5.jpg'
import image6 from '@/assets/images/image6.jpg'
import image7 from '@/assets/images/image7.jpg'
import image8 from '@/assets/images/image8.jpg'
import image9 from '@/assets/images/image9.jpg'
import image10 from '@/assets/images/image10.jpg'
import image11 from '@/assets/images/image11.jpg'
import image12 from '@/assets/images/image12.jpg'
import image13 from '@/assets/images/image13.jpg'
import image14 from '@/assets/images/image14.jpg'
import image15 from '@/assets/images/image15.jpg'
import image16 from '@/assets/images/image16.jpg'
import image17 from '@/assets/images/image17.jpg'
import image18 from '@/assets/images/image18.jpg'
import image19 from '@/assets/images/image19.jpg'
import image20 from '@/assets/images/image20.jpg'
import image21 from '@/assets/images/image21.jpg'
import image22 from '@/assets/images/image22.jpg'
const products = [
    { "id": 1, "name": "Ducati Panigale V4", "image": image14, "topSpeed": "190 mph", "motorType": "Gas", "price": "$25,000 - $40,000", "utility": "High-performance sport bike" },
    { "id": 2, "name": "Yamaha YZF-R3", "image": image18, "topSpeed": "112 mph", "motorType": "Gas", "price": "$5,500 - $6,500", "utility": "Entry-level sport bike" },
    { "id": 3, "name": "Honda Gold Wing", "image": image13, "topSpeed": "112 mph", "motorType": "Gas", "price": "$25,000 - $30,000", "utility": "Luxury touring motorcycle" },
    { "id": 4, "name": "Royal Enfield Classic 350", "image": image6, "topSpeed": "75 mph", "motorType": "Gas", "price": "$4,500 - $6,000", "utility": "Classic styling, urban commuting" },
    { "id": 5, "name": "BMW S 1000 RR", "image": image3, "topSpeed": "186 mph", "motorType": "Gas", "price": "$18,000 - $22,000", "utility": "High-performance sport bike" },
    { "id": 6, "name": "KTM Duke 390", "image": image8, "topSpeed": "104 mph", "motorType": "Gas", "price": "$6,000 - $7,500", "utility": "Urban commuter, lightweight" },
    { "id": 7, "name": "Vespa GTS 300", "image": image7, "topSpeed": "73 mph", "motorType": "Gas", "price": "$7,000 - $8,500", "utility": "Urban commuting, classic scooter" },
    { "id": 8, "name": "Zero SR/F", "image": image12, "topSpeed": "124 mph", "motorType": "Electric", "price": "$18,000 - $22,000", "utility": "Electric sport motorcycle" },
    { "id": 9, "name": "Harley-Davidson LiveWire", "image": image10, "topSpeed": "110 mph", "motorType": "Electric", "price": "$22,000 - $25,000", "utility": "Premium electric cruiser" },
    { "id": 10, "name": "Energica Ego", "image": image20, "topSpeed": "150 mph", "motorType": "Electric", "price": "$25,000 - $35,000", "utility": "Electric high-performance bike" },
    { "id": 11, "name": "Segway Ninebot Max", "image": image1, "topSpeed": "19 mph", "motorType": "Electric", "price": "$900 - $1,200", "utility": "Electric scooter, urban commute" },
    { "id": 12, "name": "Razor A5 Lux", "image": image19, "topSpeed": "15 mph", "motorType": "No engine", "price": "$150 - $200", "utility": "Manual kick scooter" },
    { "id": 13, "name": "Trek Marlin 7", "image": image5, "topSpeed": "20 mph", "motorType": "No engine", "price": "$900 - $1,200", "utility": "Mountain biking" },
    { "id": 14, "name": "Specialized Turbo Vado", "image": image4, "topSpeed": "28 mph", "motorType": "Electric", "price": "$3,500 - $5,000", "utility": "Electric commuter bicycle" },
    { "id": 15, "name": "Brompton Electric", "image": image2, "topSpeed": "15 mph", "motorType": "Electric", "price": "$3,500 - $4,500", "utility": "Folding electric bike" },
    { "id": 16, "name": "Yamaha PW50", "image": image9, "topSpeed": "30 mph", "motorType": "Gas", "price": "$1,700 - $2,000", "utility": "Off-road minibike for kids" },
    { "id": 17, "name": "Cannondale Quick CX 3", "image": image11, "topSpeed": "20 mph", "motorType": "No engine", "price": "$800 - $1,000", "utility": "Hybrid commuting bike" },
    { "id": 18, "name": "Aprilia RSV4", "image": image22, "topSpeed": "186 mph", "motorType": "Gas", "price": "$19,000 - $25,000", "utility": "High-performance sport bike" },
    { "id": 19, "name": "Kawasaki Ninja ZX-10R", "image": image16, "topSpeed": "185 mph", "motorType": "Gas", "price": "$17,000 - $20,000", "utility": "Track racing, sport riding" },
    { "id": 20, "name": "RadRunner Plus", "image": image15, "topSpeed": "20 mph", "motorType": "Electric", "price": "$1,899 - $2,200", "utility": "Utility electric bike" },
    { "id": 21, "name": "Super73 S2", "image": image21, "topSpeed": "28 mph", "motorType": "Electric", "price": "$2,695 - $3,200", "utility": "Urban cruising, off-road" },
    { "id": 22, "name": "Indian Scout Bobber", "image": image17, "topSpeed": "115 mph", "motorType": "Gas", "price": "$13,000 - $15,000", "utility": "Cruiser, casual riding" }
  ]

export default function ProductListing() {
  const [filters, setFilters] = useState({
    search: '',
    engineType: { electric: false, gas: false, none: false },
    minPrice: '',
    maxPrice: '',
    prioritize: 'Top Speed',
  })

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  return (
    <div className="flex gap-4 p-4">
      <aside className="w-64 bg-gray-200 p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <div className="mb-4">
          <Input
            placeholder="Search"
            value={filters.search}
            onChange={handleFilterChange}
            name="search"
            className="mb-2"
          />
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Engine Type</h3>
          <div className="flex flex-col">
            <label className="flex items-center">
              <Checkbox
                checked={filters.engineType.electric}
                name="electric"
              />
              Electric
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={filters.engineType.gas}
                name="gas"
              />
              Gas
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={filters.engineType.none}
                name="none"
              />
              None
            </label>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Price</h3>
          <Input
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
            name="minPrice"
            className="mb-2"
          />
          <Input
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            name="maxPrice"
          />
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Prioritize</h3>
          <Select value={filters.prioritize} onValueChange={(value) => setFilters((prev) => ({ ...prev, prioritize: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Top Speed">Top Speed</SelectItem>
              <SelectItem value="Price">Price</SelectItem>
              <SelectItem value="Utility">Utility</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full">Clear Filters</Button>
      </aside>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4">
            <CardContent>
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <img src={product.image} alt="Product" className="w-full h-40 object-cover mb-2" />
              <div className="text-sm">
                <p>Top Speed: {product.topSpeed}</p>
                <p>Motor Type: {product.motorType}</p>
                <p>Price: {product.price}</p>
                <p>Utility: {product.utility}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  )
}

