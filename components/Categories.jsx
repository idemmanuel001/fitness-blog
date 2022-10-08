import { useState } from 'react';


const Categories = ({ categories, filterItems }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-wrap items-center justify-center mb-6 md:flex-nowrap">

            {categories.map((category, index) => {

                return (
                    <button
                        key={index}
                        className={`font-bold text-sm mr-2 md:mr-3 p-1 transition duration-300 ease-in hover:text-dark-green ${activeTab === index ? 'text-dark-green' : 'text-medium-black'}`}
                        onClick={
                            () => {
                                filterItems(category);
                                setActiveTab(index);

                            }
                        }
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>

                );
            })}



        </div>
    );
};

export default Categories;