import Image from 'next/image'

const WhyChooseUsSection = () => {
  const whyChooseUsList = [
    {
      title: 'Незабываемый вкус',
      icon: '/cake.png',
      description:
        'Наши десерты готовятся исключительно на месте и всегда только из свежих продуктов, чтобы Вы могли наслаждаться насыщенным и уникальным вкусом каждого кусочка.',
    },
    {
      title: 'Свежие домашние торты',
      icon: '/strawberry.png',
      description:
        'Мы используем домашние рецепты и высококачественные ингредиенты, чтобы каждый торт был по-настоящему вкусным, ароматным и приготовленным с заботой.',
    },
    {
      title: 'Бесконечная любовь',
      icon: '/heards.png',
      description:
        'Мы добавляем в каждое изделие несколько ложек любви и тепла, чтобы Ваши праздники были наполнены теплом и радостью.',
    },
  ]

  return (
    <>
      <p className='text-3xl sm:text-4xl lg:text-5xl'>Почему нам доверяют</p>
      <div className='grid gap-8 px-4 sm:px-4 md:px-16 lg:px-32 xl:px-64 pb-12 grid-cols-1 md:grid-cols-3'>
        {whyChooseUsList.map((reason, index) => (
          <div
            className='p-6 rounded-xl font-semibold bg-slate-200 flex flex-col justify-start items-start gap-3'
            key={index}
          >
            <div className='flex items-center gap-4 flex-wrap lg:flex-nowrap justify-center'>
              <Image src={reason.icon} alt='' width={60} height={60} priority />

              <p className='text-base md:text-lg lg:text-xl text-center'>
                {reason.title}
              </p>
            </div>
            <p className='font-normal text-xs	md:text-sm lg:text-base text-center lg:text-left'>
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default WhyChooseUsSection
