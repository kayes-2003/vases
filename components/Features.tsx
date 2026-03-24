import Image from 'next/image'

import { AiFillHeart, AiFillCheckCircle, AiFillControl } from 'react-icons/ai'

const features = [
  {
    name: 'Unlimited inboxes',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    icon: AiFillHeart,
  },
  {
    name: 'Manage team members',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    icon: AiFillCheckCircle,
  },
  {
    name: 'Spam report',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    icon: AiFillControl,
  },
]

export default function Features() {
  return (
    <div className= "w-full bg-[#ecf0f3] sm:py-180 md:py-150 lg:py-180 py-100">
      <div className="mx-auto max-w-7xl px-6  ">
        <div className="mx-auto lg:mx-0 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
            Utilize the latest Tech Stacks from a professional team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Let us design, build and develop your next project. Whether that is your company's website, a highly converting landing page, a SaaS application or a mobile app. We've got you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ff781f]">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-[#ff781f]">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>




        <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl mt-5">
  <div className="md:flex">
    <div className="md:shrink-0">
      <Image
        className="h-48 w-full object-cover md:h-full md:w-48"
        src="/wall-02.jpg"
        alt="Modern building architecture"
        width={600}
        height={700}
      />
    </div>
    <div className="p-8">
      <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
      <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p className="mt-2 text-gray-500">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
        places to do just that.
      </p>
    </div>
  </div>
</div>


            <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
            <Image
                className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" 
                src="/table-lamp.jpg" 
                alt="profile"
                width={100}
                height={100} />
  <div className="space-y-2 text-center sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg font-semibold text-black">Erin Lindford</p>
      <p className="font-medium text-gray-500">Product Engineer</p>
    </div>
    <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>

    
  </div>
</div>
      </div>
    </div>
  )
}