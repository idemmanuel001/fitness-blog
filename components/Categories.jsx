import { useState } from 'react';


const Categories = ({ filterItems, categories }) => {
    const [activeTab, setActiveTab] = useState(0);
    const allCategories = [{ name: 'All', slug: 'all' }, ...categories];


    return (
        <div className="flex flex-wrap items-center justify-center mb-6 md:flex-nowrap">

            {allCategories.map((category, index) => {
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
                        {category.name}
                    </button>

                );
            })}



        </div>
    );
};

export default Categories;