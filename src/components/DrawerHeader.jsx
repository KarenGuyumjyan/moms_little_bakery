const DrawerHeader = ({ handleOpenDrawer }) => {
    return (
      <div className="flex items-center gap-3 pb-4 pt-8 sticky top-0 bg-purple-50 z-10">
        <svg
          className="rotate-180 cursor-pointer opacity-30 hover:opacity-100 transition-transform transform hover:-translate-x-1"
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleOpenDrawer}
        >
          <path
            d="M1 7H14.7143"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.71436 1L14.7144 7L8.71436 13"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-2xl font-bold">Корзина</h2>
      </div>
    );
  }

  export default DrawerHeader