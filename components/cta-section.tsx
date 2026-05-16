import { Button } from '@/components/ui/button'
import Link from 'next/link'

function CallToAction() {
    return (
        <section className="bg-black py-32 md:py-64">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold text-white lg:text-5xl">Clean Water, Healthier Lives</h2>
                    <p className="mt-4 text-gray-400">
                        Reliable water treatment solutions for homes, schools, hospitals, and businesses across Uganda.
                    </p>
                    <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
                        From borehole drilling and filtration systems to purification plants and maintenance services, 
                        we provide end-to-end water solutions tailored to your needs. Our certified team ensures 
                        clean, safe water that meets national and international standards.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/contact">
                                <span>Get a Free Quote</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/services">
                                <span>Our Services</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { CallToAction as CtaSection }
export default CallToAction
