import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

type Product = {
  id: number
  name: string
  image: string
  topSpeed: string
  motorType: string
  price: string
  utility: string
}

type ComparisonModalProps = {
  isOpen: boolean
  onClose: () => void
  products: Product[]
  onRemove: (id: number) => void
}

export function ComparisonModal({ isOpen, onClose, products, onRemove }: ComparisonModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Compare Motorcycles</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-0 right-0"
                onClick={() => onRemove(product.id)}
              >
                <X className="h-4 w-4" />
              </Button>
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-[4/3] object-cover mb-2"
              />
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm">Top Speed: {product.topSpeed}</p>
              <p className="text-sm">Motor Type: {product.motorType}</p>
              <p className="text-sm">Price: {product.price}</p>
              <p className="text-sm">Utility: {product.utility}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

