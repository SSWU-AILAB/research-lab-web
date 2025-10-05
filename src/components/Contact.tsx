import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="py-12 bg-neutral-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-8 tracking-wide">Get in Touch</h2>
          <p className="text-base md:text-lg mb-16 opacity-90 font-light leading-relaxed">
          If you’re interested in research collaboration or joining our lab, we’d be delighted to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Mail className="h-8 w-8 mx-auto mb-4 opacity-80" strokeWidth={1.5} />
              <h3 className="font-medium mb-3 text-lg">Email</h3>
              <a
                href="mailto:info@ailab.edu"
                className="opacity-80 hover:opacity-100 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded transition-opacity font-light"
              >
                jhyoo@sungshin.ac.kr
              </a>
            </div>
            <div>
              <Phone className="h-8 w-8 mx-auto mb-4 opacity-80" strokeWidth={1.5} /> 
              <h3 className="font-medium mb-3 text-lg">Phone</h3>
              <p className="opacity-80 font-light leading-relaxed">
                +82-2-920-7695
              </p>
            </div>
            <div>
              <MapPin className="h-8 w-8 mx-auto mb-4 opacity-80" strokeWidth={1.5} />
              <h3 className="font-medium mb-3 text-lg">Address</h3>
              <p className="opacity-80 font-light leading-relaxed">
              School of AI Convergence,
              <br />
              Sungshin Women's University,
              <br />
              Bomun-ro 34da-gil, Seongbuk-gu, Seoul, 02840,
              <br />
              Republic of Korea
             </p>
            </div>
          </div>

          <div className="border-t border-background/20 pt-3">
            <p className="opacity-60 text-sm font-light">
              © {new Date().getFullYear()} AI LAB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
