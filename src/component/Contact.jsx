import React from 'react'

function Contact() {
    return (
        <section
            id="contact"
            className="mt-12 py-12 bg-gray-300 rounded-lg p-5 h-[45vh]"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-gray-700 mb-6">
                Kami sangat senang mendengar dari Anda! Jangan ragu untuk
                menghubungi kami melalui media sosial atau email.
              </p>
              <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                <a href="mailto:agustinusputra94@gmail.com"> Hubungi Kami</a>
              </button>
            </div>
          </section>
    )
}

export default Contact