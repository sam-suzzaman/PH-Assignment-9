const BlogsData = [
    {
        id: 1,
        title: "What is Context API and what is the purpose of it?",
        des: `React এ সাধারণত Props এর মাধ্যমে Top-to-Bottom বা Parent to Child এ ডাটা পাঠানো হয়। তবে কম্পোনেন্টের লেয়ার যত বাড়তে থাকে Props দিয়ে ডাটা পাঠানো তত কঠিন হতে থাকে। কারণ Top Level থেকে ডাটা যদি Fifth level এ পাঠাতে হয় তখন Props আকারে পাঠানো হয়। এক্ষেত্রে মাঝের Level এর components গুলোর Props এর প্রয়োজন না হলেও তাদের ভিতর দিয়ে Props pass করতে হয়। মাঝের কম্পোনেন্টকে skip করে পরের কম্পোনেন্টকে props পাঠানো যায় না। এই Props Drilling এর বিষয়টাকে সহজ করার জন্যই ব্যবহার হয় Context API. এর মাধ্যমে খুব সহজেই একটা state থেকে যে কোন কম্পনেন্টে Data pass করা যায়।
        এর ফলে Context API use করে সরাসরি যেই কম্পনেন্টে ডাটা পাঠানো প্রয়োজন সেই কম্পনেন্টে ডাটা পাঠানো যায়। এর জন্য আমাদেরকে প্রথমে context create করতে হবে। এরপর সেই context Provider এর মাধ্যমে value কে  পাস করতে হবে। পরিশেষে, useContext() দ্বারা যেখানে প্রয়োজন সেখানে data কে ব্যবহার করা যাবে।  
        `,
    },
    {
        id: 2,
        title: "What is Semantic Tags in HTML?",
        des: ` HTML এ Semantic Tags বলতে ঐ সকল Tags কে বোঝায় যেগুলোর একটা নির্দিষ্ট অর্থ বহন করে এবং এই tags গুলো থেকে developer ও Computer উভয়ই সহজেই বুঝতে পারে এই ট্যাগের অর্থ বা এর ব্যবহারের উদ্দেশ্য কি। Semantic Tag এর কিছু উদাহরণ হলোঃ <article>, <header>, <footer>,<nav> <aside> <section>. এই tag এর কারণে HTML code গুলো আরো বেশি মিনিংফুল হয়ে উঠে। তাছাড়া এটা seo তেও অনেক helpful. `,
    },
    {
        id: 3,
        title: "What are the difference between inline, block & inline-block",
        des: "যে সকল এলিমেন্টের display Property এর মান inline সেই সকল এলিমেন্টগুলো একলাইনে শুরু হয় এবং পাশাপাশি অবস্থান করে। আর যে এলিমেন্টের display property এর মান block তারা সবসময় নতুন লাইন থেকে শুরু হয় এবং যে লাইনে অবস্থান করে পুরপুরি সেই লাইন দখল করে নেয়। অন্য কাওকে সেই লাইনে ঢুকতে দেয় ন। কোন এলিমেন্টের display এর মান inline-block হলে বোঝা যায় যে ঐ এলিমেন্টের ডিফল্ট Property value ছিল block এখন দুই বা ততোধিক block element কে একলাইনে পাশাপাশি আনার জন্য inline-block কে ব্যবহার করা হয়। এতে করে element টা ব্লক লেভেলের হলেও আচরন করে inline এলিমেন্টের মতো।  ",
    },
];

export default BlogsData;
