const imagesList = [
    'https://leakpt-a790.kxcdn.com/wp-content/uploads/2019/03/ultra-instinct-goku-dragon-ball-super-wallpapers-e1552087195183.jpg',
    'https://cdn.ome.lt/J0RNeHSD7HjVrr1f6AquAOBZW84=/1200x630/smart/extras/conteudos/dragon-ball3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHo0mNqU8sQ37VJoSQV37_LYXKYkKzSPKi0A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTag4_eMiThaRnvccHd2KClfClxSk3DEjzm9Q&usqp=CAU',
    'https://s.aficionados.com.br/imagens/dragon-ball-super-quem-eliminou-mais-adversarios-no-torneio-do-poder_f.jpg',
    'https://s2.glbimg.com/w4J3BR5lOzAdD_YvFFkmUVr0zzg=/0x0:1514x883/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/N/B/QhOSXnQD6X56aoDD9BlQ/screenshot-1.png'
]

const listOfOuestions = [

]

const listOfAlternatives = [

]

var image1 = document.querySelector('#img1')
var image2 = document.querySelector('#img2')

image1.src = imagesList[0]
image2.src = imagesList[1]

var question = document.querySelector('#Questions p')
var listQuestions = document.querySelector('#Questions ul')