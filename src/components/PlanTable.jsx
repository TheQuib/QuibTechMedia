import { motion } from "framer-motion"

export const PlanTable = () => {
    return (
        <section className="w-screen flex justify-center bg-customDarkBg2 relative">
            <div className="absolute -top-16" id="priceTable" />
            <div className="pb-20 pt-12 bg-customDarkBg2 2x1:w-[1150px] lg:w-[1050px] md:w-4/5 ">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="max-w-2xl mx-auto text-center mb-16">
                        <span className="custom-block-subtitle">
                            Find Your Perfect Fit
                        </span>
                        <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                            Choose your best plan
                        </h2>
                    </div>
                    <table>
                        <tr>
                            <th>Plan</th>
                            <th>Social Media Management</th>
                            <th>Website Creation / Design</th>
                            <th>Infographic Design</th>
                        </tr>
                        <tr>
                            <td>Basic</td>
                            <td>1 platform, 2 posts/week - $150/mo</td>
                            <td>Up to 3 pages - $500 one-time</td>
                            <td>1 basic - $100 each</td>
                        </tr>
                        <tr>
                            <td>Standard</td>
                            <td>2 platforms, 3 posts/week - $300/mo</td>
                            <td>Up to 5 pages - $800 one-time</td>
                            <td>2 custom - $250 total</td>
                        </tr>
                        <tr>
                            <td>Pro</td>
                            <td>2 platforms, 5 posts/week - $500/mo</td>
                            <td>Up to 7 pages, SEO basics - $1200 one-time</td>
                            <td>4 custom - $400 total</td>
                        </tr>
                        <tr>
                            <td>Nonprofit</td>
                            <td>1 platform, 4 posts/week - $200/mo</td>
                            <td>Up to 5 pages, nonprofit focus - $600 one-time</td>
                            <td>3 custom, cause-oriented - $300 total</td>
                        </tr>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};