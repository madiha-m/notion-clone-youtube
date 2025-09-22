import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div className="bg-shop_light_pink">
      <p className="text-xl fon t-semibold">
        Home Page
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ratione, cumque dolores expedita voluptates perspiciatis
        natus aspernatur deserunt eius, deleniti fugit reiciendis,
        inventore in ab temporibus. Libero, possimus suscipit.
        Facere saepe impedit quod quam explicabo quasi ad iusto fuga.
        Necessitatibus officiis earum corporis sed accusamus veritatis
        cumque deserunt quos architecto vel.
      </p>
      <Button variant="destructive" size="lg">check out destructive</Button>
      <Button variant="ghost" className="mx-3 border-2">check out ghost</Button>
      <Button>Check out default</Button>
    </div>
  )
}

export default Home