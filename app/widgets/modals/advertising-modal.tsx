"use client";

export const AdvertisingModal = () => {

    return (
        <div>
            <header className="py-4 px-6 flex-initial text-large font-semibold flex flex-col gap-1">
                <span>Discover</span>
                <span className="text-blue-500">New</span>
                <span>Horizons!</span>
            </header>
            <div className="flex flex-1 flex-col gap-3 px-6 py-2">
                <p>
                    Join our community of lifelong learners and gain access to a world of knowledge! From cutting-edge technology to captivating stories, we have something for everyone.
                </p>
                <p>
                    Experience the joy of learning with our engaging courses, led by expert instructors. Dive into a variety of topics, from web development and data science to creative writing and beyond.
                </p>
                <p>
                    Don&apos;t miss out on this incredible opportunity to expand your skills, meet like-minded individuals, and unlock your full potential. Sign up today and start your journey to a brighter future!
                </p>
            </div>
        </div>
    )
}