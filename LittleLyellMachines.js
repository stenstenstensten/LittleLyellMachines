let rockColorPalettes = []

const labelTextWord01 = [
  ///CHAPTER 1
  [
    ['E s c a p e d   c o n v i c t - s'],
    ['B u s h m a n - s'],
    ['E x p l o r e r - s'],
    ['M a i n l a n d   o r a c l e - s'],
    ['L e a d   n a v i g a t o r - s'],
    ['S u r v e y o r - s'],
    ['G o v e r n m e n t   e x p e d i t i o n - s'],
    ['S e a r c h   p a r t y - s'],
    ['G e o l o g i s t - s'],
    ['A b a n d o n e d   e x p e d i t i o n - s'],
    ['B r i t i s h   e x p e r t - s'],
    ['C a l i f o r n i a n'],
  ],
  ///CHAPTER 2
  [
    ['T o o l   f o r'],
    ['T o o l   f o r'],
    ['T o o l   f o r'],
    ['T o o l   f o r'],
    ['T o o l   f o r'],
    ['T o o l   f o r'],
    ['T o o l   f o r'],
    ['T o o l   f o r'],
    ['T o o l   f o r'],
    ['T o o l   f o r'],
    ['T o o l   f o r'],
    ['T o o l   f o r'],
  ],
  ///CHAPTER 3
  [
    ['V a l v e   f o r   a'],
    ['V a l v e   f o r   a'],
    ['V a l v e   f o r   a'],
    ['V a l v e   f o r   a'],
    ['V a l v e   f o r   a'],
    ['V a l v e   f o r   a'],
    ['V a l v e   f o r   a'],
    ['V a l v e   f o r   a'],
    ['V a l v e   f o r   a'],
    ['V a l v e   f o r   a'],
    ['V a l v e   f o r   a'],
    ['V a l v e   f o r   a'],
  ],
  ///CHAPTER 4
  [
    ['T u n n e l'],
    ['V e r t i c a l   s h a f t'],
    ['T r e n c h   e x c a v a t i o n'],
    ['C r o s s - c u t   s h a f t'],
    ['S h o u l d e r - w i d t h   p a s s a g e'],
    ['D e e p   b o r e   s e g m e n t (4)'],
    ['O r e   p a s s   p a s s a g e'],
    ['S u m p   a n d   w i n z e'],
    ['S u b l e v e l'],
    ['M i n e   a d i t'],
    ['S l o p e   t u n n e l'],
    ['E x p l o r a t i o n   d r i f t'],
  ],
  ///CHAPTER 5
  [
    ['E x p e n s i v e l y   i m p o r t e d'],
    ['B r o k e n'],
    ['P r e m a t u r e l y   a s s e m b l e d'],
    ['M o d i f i e d  /  r e t r o f i t'],
    ['H e a v y   c a s t   i r o n'],
    ['L o s t   i n   t r a n s i t'],
    ['A m e r i c a n - m a d e'],
    ['N o i s y'],
    ['D i s r e p a i r e d'],
    ['U n r e l i a b l e'],
    ['O v e r - h e a t e d'],
    ['O p t i m i s t i c a l l y   e r e c t e d'],
  ],
  ///CHAPTER 6
  [
    ['E x t r e m e   g r a d i e n t'],
    ['C r a z y (9)   e n g i n e e r i n g'],
    ['P a r o c h i a l l y - m o t i v a t e d'],
    ['D e l a y e d   s h i p m e n t   o f'],
    ['E x p e n s i v e'],
    ['O v e r s e a s   e x p e r i m e n t a l'],
    ['L o s s - m a k i n g'],
    ['U n - u s e d'],
    ['D u p l i c a t e d'],
    ['H i g h - r i s k   t e c h n i c a l'],
    ['O v e r - b u d g e t'],
    ['M a s s - s h i p p e d'],
  ],
  ///CHAPTER 7
  [
    ['L o c a l l y   c o n t r o l l e d'],
    ['C o r r u p t'],
    ['I r r e g u l a r'],
    ['I n t e r n a t i o n a l l y - c o n t r o l l e d'],
    ['S u s p i c i o u s l y   c o o r d i n a t e d'],
    ['P r e - e m p t i v e l y   l i q u i d a t i n g'],
    ['F r a u d u l e n t'],
    ['T r e a c h e r o u s'],
    ['I r i s h - T a s m a n i a n'],
    ['F i n a n c i a l l y   i n s o l v e n t'],
    ['D i s a p p e a r i n g'],
    ['D i s p u t e d'],
  ],
  ///CHAPTER 8
  [
    ['A p p a r a t u s   f o r'],
    ['A p p a r a t u s   f o r'],
    ['A p p a r a t u s   f o r'],
    ['A p p a r a t u s   f o r'],
    ['A p p a r a t u s   f o r'],
    ['A p p a r a t u s   f o r'],
    ['A p p a r a t u s   f o r'],
    ['A p p a r a t u s   f o r'],
    ['A p p a r a t u s   f o r'],
    ['A p p a r a t u s   f o r'],
    ['A p p a r a t u s   f o r'],
    ['A p p a r a t u s   f o r'],
  ],
  ///CHAPTER 9
  [
    ['L o n d o n   p r e s s   r e p o r t a g e'],
    ['C o n f i d e n t   b r o k e r - s'],
    ['M a j o r i t y   s h a r e h o l d e r - s'],
    ['D i s t o r t e d'],
    ['V o l a t i l e'],
    ['T r u l y   c r a z y (9)'],
    ['I m m u n e (2)   t o   m o d e r a t i o n'],
    ['H y s t e r i c a l'],
    ['D e c e p t i v e'],
    ['E x a g g e r a t e d'],
    ['H y p e r b o l i c'],
    ['I n f l a t e d'],
  ],
  ///CHAPTER 10
  [
    ['P y r i t e   s e g m e n t (4)'],
    ['S i l i c a   s p e c i m e n'],
    ['B l i s t e r   c o p p e r'],
    ['H e r m a t i t e   s p e c i m e n'],
    ['Q u a r t z i t e   v e i n   s a m p l e'],
    ['B o r n i t e   s a m p l e'],
    ['C o p p e r   m a t t e   s a m p l e'],
    ['O r e   s e g m e n t (4)'],
    ['L o d e   s e g m e n t (4)'],
    ['S i l v e r   s a m p l e'],
    ['A l u m i n a   s p e c i m e n'],
    ['G o s s a n   d e p o s i t   s a m p l e'],
  ],
  ///CHAPTER 11
  [
    ['F o s s i l i s e d   s e e d   p o d'],
    ['B u r i e d   f e r n   c a s i n g'],
    ['B u s h f i r e - s i n g e d   s i l i q u a'],
    ['D r i e d   b u t t o n - g r a s s   s e e d'],
    ['R o t t i n g   l i c h e n   s p o r e'],
    ['D e c a y e d   s e e d   c a s e'],
    ['F o s s i l i s e d   s c r u b   r e m n a n t'],
    ['C r u m b l i n g   b a r k   h u s k'],
    ['W a t e r - l o g g e d   m o s s   s p o r e'],
    ['F o s s i l i s e d   b a r k   s t r i p'],
    ['D a m p   s o i l   s c r a p i n g'],
    ['B u r n e d   p a n d a (5) - g r a s s'],
  ],
  ///CHAPTER 12
  [
    ['S u l p h u r   d i o x i d e'],
    ['L e a d'],
    ['A r s e n i c'],
    ['S e l e n i u m'],
    ['Z i n c   r e s i d u e'],
    ['C o p p e r   s u l p h i d e'],
    ['M e r c u r y'],
    ['T u n g S T E N'],
    ['C a d m i u m'],
    ['I r o n'],
    ['S i l i c a'],
    ['S u l p h u r i c   a c i d'],
  ],
]

const labelTextWord02 = [
  ///CHAPTER 1
  [
    ['h o l e   d i g g i n g'],
    ['m u d   s c r a p e r'],
    ['s t r o n g (7)   s w a g   r o l l i n g'],
    ['s h o v e l   r e p a i r'],
    ['f o o d   p r e s e r v i n g'],
    ['n a v i g a t i o n'],
    ['1 4 6 t h - p a r a l l e l   m a r k e r'],
    ['t e n t   p e g'],
    ['f i r e   f l i n t'],
    ['b o o t   d r y i n g'],
    ['c r e e k - w a t e r   f i l t e r i n g'],
    ['s c r u b   h a c k i n g'],
  ],
  ///CHAPTER 2
  [
    ['s p l i t t i n g'],
    ['c l e a r i n g'],
    ['l o g g i n g'],
    ['f e l l i n g'],
    ['c h i p p i n g'],
    ['c u t t i n g'],
    ['s a w i n g'],
    ['s p l i n t e r i n g'],
    ['q u a r t e r i n g'],
    ['s t r i p p i n g'],
    ['p r o c e s s i n g'],
    ['b u r n i n g'],
  ],
  ///CHAPTER 3
  [
    ['c o n t a m i n a t e d'],
    ['f l o o d e d'],
    ['t o x i c   t a n n i n'],
    ['s t a g n a n t'],
    ['c a t a s t r o p h i c a l l y   e n g u l f e d'],
    ['b l o c k e d   c u r r e n t (12)'],
    ['s t r o n g (7)   p r e s s u r e'],
    ['s w o l l e n    t o r r e n t'],
    ['p o l l u t e d   i r r i g a t i o n'],
    ['s w a m p e d'],
    ['h a z a r d o u s   c u r r e n t (12)'],
    ['l e a k i n g'],
  ],
  ///CHAPTER 4
  [
    ['d r i l l i n g'],
    ['s t r u c t u r a l   s u p p o r t'],
    ['p e r m i t   m a r k i n g'],
    ['t i t l e   s u r v e y i n g'],
    ['t e m p o r a r y   s c a f f o l d'],
    ['b o u n d a r y   m a r k e r'],
    ['b l a s t i n g'],
    ['e x p l o s i o n   p r o t e c t i o n'],
    ['w i n c h i n g   p l a t f o r m'],
    ['v e n t i l a t i o n   i n t a k e'],
    ['b a c k f i l l   c a g e'],
    ['e x h a u s t   m a c h i n e r y'],
  ],
  ///CHAPTER 5
  [
    ['s m e l t e r'],
    ['b l a s t   p i n i o n'],
    ['b e l t   c o g'],
    ['b l a s t   f u r n a c e'],
    ['o r e   c r u s h e r'],
    ['o r e - d r e s s i n g   s h a k e r'],
    ['g r a v i t y   t a b l e'],
    ['a m a l g a m a t i o n   t r e a t m e n t'],
    ['c o m b u s t i o n   p l a t e'],
    ['e i g h t - s t a m p   m i l l'],
    ['c h i m n e y   c y l i n d e r'],
    ['b a t t e r y   h o u s e'],
  ],
  ///CHAPTER 6
  [
    ['r o p e w a y   h a u l a g e   b u s (8)'],
    ['w o o d e n   r a i l'],
    ['v i a d u c t   c o n s t r u c t i o n'],
    ['2 - f o o t   6 - i n c h   g a u g e   t r a m'],
    ['o v e r l a n d - m o n o p o l y   r a i l'],
    ['c a b l e   t r a n s p o r t'],
    ['3 - f o o t   6 - i n c h   g a u g e   r a i l'],
    ['r o u t e   m a p   d i s t o r t i o n'],
    ['r a i l   f i s h - p l a t e'],
    ['f r e i g h t   t a r i f f'],
    ['h o r s e - d r a w n   b u s (8)'],
    ['h a u l i n g   h o r s e'],
  ],
  ///CHAPTER 7
  [
    ['t h r e a t e n e d   l a w s u i t'],
    ['a u d i t   t r a i l'],
    ['s y n d i c a t e   m e r g e r'],
    ['c o n s o r t i a   f u n d - r a i s i n g'],
    ['c o m p a n y   a m a l g a m a t i o n'],
    ['l i a b i l i t y   l i m i t i n g'],
    ['p o l i t i c a l   a d v o c a c y'],
    ['c h a i r (1) m a n   r e m o v a l'],
    ['f u n d   m i s a p p r o p r i a t i o n'],
    ['b o a r d   s t a c k i n g'],
    ['o f f - s h o r e   r e g i s t r a t i o n'],
    ['p e r s o n a l   d i s p u t e'],
  ],
  ///CHAPTER 8
  [
    ['i n s p e c t i n g   m e t a l l u r g i s t'],
    ['s k i l l e d   m i g r a n t   m i n e r'],
    ['l o c a l   c o u n c i l m a n'],
    ['a l l  t o g e t h e r (10)   l a b o u r   f o r c e'],
    ['u n s k i l l e d   m i n i n g   g a n g'],
    ['p o l i t i c a l l y   w e a p o n i s e d'],
    ['u n e m p l o y e d   l a b o u r e r'],
    ['a l l   t o g e t h e r (10)   2000 - m a n   g a n g'],
    ['m i n e   l a b o u r e r'],
    ['l o c a l   p u b l i c a n'],
    ['l o c a l   f o o t b a l l   t e a m'],
    ['c a t h o l i c   p r i e s t'],
  ],
  ///CHAPTER 9
  [
    ['c r a s h   d e n i a l'],
    ['[e n d l e s s   l o d e]   n a r r a t i v e'],
    ['c h a m p i o n   l i a r   o f   t h e   c e n t u r y'],
    ['1 0 0  t o  0  i n v e s t m e n t'],
    ['d i v i d e n d   c o p i n g'],
    ['p a n e g y r i c'],
    ['p u b l i c i t y   e d i t o r i a l'],
    ['s p e c u l a t i o n'],
    ['l o d e   m a p   p r e s e n t a t i o n'],
    ['r e t u r n   o n   i n v e s t m e n t'],
    ['p r o s p e c t u s'],
    ['b l u e p r i n t'],
  ],
  ///CHAPTER 10
  [
    ['t e s t   r e a d i n g :'],
    ['t e s t   r e a d i n g :'],
    ['t e s t   r e a d i n g :'],
    ['t e s t   r e a d i n g :'],
    ['a s s e s s m e n t   r e a d i n g :'],
    ['t e s t   r e a d i n g :'],
    ['t e s t   r e a d i n g :'],
    ['t e s t   r e a d i n g :'],
    ['a s s e s s m e n t   r e a d i n g :'],
    ['t e s t   r e a d i n g :'],
    ['t e s t   r e a d i n g :'],
    ['t e s t   r e a d i n g :'],
  ],
  ///CHAPTER 11
  [
    ['f r o m   a   m i s t y'],
    ['f r o m   a   r u g g e d'],
    ['f r o m   an   e x p o s e d'],
    ['f r o m   a   t a n g l e d'],
    ['f r o m   a   r a i n y'],
    ['f r o m   a   w i n d y'],
    ['f r o m   a   b u s h - f i r e   p r o n e'],
    ['f r o m   an   u n r e a c h a b l e'],
    ['f r o m   an   i n a c c e s s i b l e'],
    ['f r o m   a   t r e a c h e r o u s'],
    ['f r o m   a   r o c k y'],
    ['f r o m   a   w o o d e d'],
  ],
  ///CHAPTER 12
  [
    ['p a r t i c l e'],
    ['p a r t i c l e'],
    ['p a r t i c l e'],
    ['p a r t i c l e'],
    ['p a r t i c l e'],
    ['p a r t i c l e'],
    ['p a r t i c l e'],
    ['p a r t i c l e'],
    ['p a r t i c l e'],
    ['p a r t i c l e'],
    ['p a r t i c l e'],
    ['p a r t i c l e'],
  ],
]

const labelTextWord03 = [
  ///CHAPTER 1
  [
    ['d e v i c e'],
    ['d e v i c e'],
    ['d e v i c e'],
    ['d e v i c e'],
    ['d e v i c e'],
    ['d e v i c e'],
    ['d e v i c e'],
    ['d e v i c e'],
    ['d e v i c e'],
    ['d e v i c e'],
    ['d e v i c e'],
    ['d e v i c e'],
  ],
  ///CHAPTER 2
  [
    ['m y r t l e'],
    ['b l a c k   g u m'],
    ['d e a d   p i n e'],
    ['s a s s a f r a s'],
    ['e u c a l y p t u s'],
    ['h u o n   p i n e'],
    ['a s h'],
    ['b l a c k w o o d'],
    ['l e a t h e r w o o d'],
    ['c e l e r y - t o p   p i n e'],
    ['s i l v e r   w a t t l e'],
    ['s o u t h e r n   b e e c h'],
  ],
  ///CHAPTER 3
  [
    ['v i a d u c t'],
    ['p i p e'],
    ['g u t t e r'],
    ['t a n k (3)'],
    ['t a n k (3)'],
    ['a q u e d u c t'],
    ['c u l v e r t'],
    ['t r e n c h'],
    ['d r a i n'],
    ['d i t c h'],
    ['c o n d u i t'],
    ['c h a n n e l'],
  ],
  ///CHAPTER 4
  [
    ['b i t'],
    ['b i t'],
    ['b i t'],
    ['b i t'],
    ['b i t'],
    ['b i t'],
    ['b i t'],
    ['b i t'],
    ['b i t'],
    ['b i t'],
    ['b i t'],
    ['b i t'],
  ],
  ///CHAPTER 5
  [
    ['p a r t'],
    ['p a r t'],
    ['p a r t'],
    ['p a r t'],
    ['p a r t'],
    ['p a r t'],
    ['h u b (11)'],
    ['h u b (11)'],
    ['p a r t'],
    ['p a r t'],
    ['p a r t'],
    ['p a r t'],
  ],
  ///CHAPTER 6
  [
    ['h a r d w a r e'],
    ['h a r d w a r e'],
    ['h a r d w a r e'],
    ['h a r d w a r e'],
    ['h a r d w a r e'],
    ['h a r d w a r e'],
    ['h a r d w a r e'],
    ['h a r d w a r e'],
    ['h a r d w a r e'],
    ['h a r d w a r e'],
    ['h a r d w a r e'],
    ['h a r d w a r e'],
  ],
  ///CHAPTER 7
  [
    ['i n s t r u m e n t'],
    ['i n s t r u m e n t'],
    ['i n s t r u m e n t'],
    ['i n s t r u m e n t'],
    ['i n s t r u m e n t'],
    ['i n s t r u m e n t'],
    ['i n s t r u m e n t'],
    ['i n s t r u m e n t'],
    ['i n s t r u m e n t'],
    ['i n s t r u m e n t'],
    ['i n s t r u m e n t'],
    ['i n s t r u m e n t'],
  ],
  ///CHAPTER 8
  [
    ['l a b o u r   s u p e r v i s i o n'],
    ['a c c i d e n t a l   d e a t h   r e p o r t'],
    ['w o r k   s h i f t   d e m a n d s'],
    ['a c c i d e n t   i n s u r a n c e'],
    ['u n i o n   s p e e c h - m a k i n g'],
    ['p a y   d e m a n d s'],
    ['b o a r d   &   f o o d   i n c l u s i o n s'],
    ['s t r i k e   d e m a n d s'],
    ['s i l i c o s i s   d a m a g e'],
    ['t y p h o i d   r e c o v e r y'],
    ['d r u n k e n   b r a w l i n g'],
    ['p a y - r o l l   a d m i n'],
  ],
  ///CHAPTER 9
  [
    ['o p t i m i s e r'],
    ['o p t i m i s e r'],
    ['o p t i m i s e r'],
    ['o p t i m i s e r'],
    ['o p t i m i s e r'],
    ['o p t i m i s e r'],
    ['t r a c k e r'],
    ['t r a c k e r'],
    ['t r a c k e r'],
    ['t r a c k e r'],
    ['t r a c k e r'],
    ['t r a c k e r'],
  ],
  ///CHAPTER 10
  [
    ['O x i d i s e d'],
    ['S u s p e c t e d   b a r r e n'],
    ['F u l l y   e x h a u s t e d'],
    ['F u l l y   e x t r a c t e d'],
    ['M a x i m u m (6)  g r a d e'],
    ['I r r e g u l a r'],
    ['D e p l e t e d'],
    ['P a y a b l e'],
    ['F a l s i f i e d'],
    ['A b u n d a n t'],
    ['H i g h - p e r c e n t'],
    ['L o w - g r a d e'],
  ],
  ///CHAPTER 11
  [
    ['r a i n f o r e s t'],
    ['r a v i n e'],
    ['r i d g e'],
    ['g o r g e'],
    ['e s c a r p m e n t'],
    ['m o u n t a i n   r a n g e'],
    ['v a l l e y'],
    ['t a r n - f i l l e d   p l a t e a u'],
    ['p e a k'],
    ['l a k e - e d g e'],
    ['c r e e k - b e d'],
    ['c a n y o n'],
  ],
  ///CHAPTER 12
  [
    ['i n   d u s t'],
    ['i n   b r e a t h'],
    ['i n   o r g a n s'],
    ['i n   t h i c k   c l o u d'],
    ['w a s h e d   i n   c r e e k'],
    ['i n   t h e   w a t e r - w a y s'],
    ['i n   t a i l i n g s'],
    ['i n   s l a g'],
    ['i n   t h e   a i r'],
    ['d e e p   i n   t h e   s o i l'],
    ['i n   t h e   h a r b o u r'],
    ['i n   w a s t e'],
  ],
]

let labelTextWord01Index
let labelTextWord02Index
let labelTextWord03Index

let textIndex
let chapterText

//zoom and move between points
let zoomLevel = 1
let currentPointIndex = -1
let zoomClose = 7

//box array
let boxArray = [
  box01,
  box02,
  box03,
  box04,
  box05,
  box06,
  box07,
  box08,
  box09,
  box10,
  box11,
  box12,
  box13,
]

let boxLabelArray = [
  box01Label,
  box02Label,
  box03Label,
  box04Label,
  box05Label,
  box06Label,
  box07Label,
  box08Label,
  box09Label,
  box10Label,
  box11Label,
  box12Label,
  box13Label,
]

let boxPoints = []

let boxLocations = []

//size of little boxes
let boxSizeFactor = 7
let boxSizeFactorMin = 7
let boxSizeFactorMax = 13

//woodChips
let woodchip01
let woodchips = [] // Array to store WoodchipTestB objects
let numWoodchips = 12 //number of woodchips
let woodchipEye = 1

///////////// INTERFACE SPECIFIC VARIABLE
let wobbleStrokeWidth = 10

//wobbleBorders foreground
wobbleBorderValues1 = []
wobbleBorderValues2 = []

//wobbleBorders background
wobbleBorderValues3 = []
wobbleBorderValues4 = []

let kelpElements = [] // Array to store kelpShape02 elements
let numberFloatingKelps

let categories = ['SPARSE', 'MEDIUM', 'HEAVY']
let featuredMaterial
let rubbleCategory

function setup() {
  noLoop()
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
  imageMode(CENTER)
  textAlign(LEFT, CENTER)
  colorMode(HSB, 360, 100, 100, 255)
  textFont('sans-serif')

  featuredMaterial = random(['IRON', 'COPPER', 'OXIDE', 'PYRITE', 'GRANITE'])
  rubbleCategory = random(categories)

  if (typeof tokenData !== 'undefined') {
    const seed = tokenData.hash.slice(0, 10)
    randomSeed(seed)

    if (tokenData.attributes) {
      if (tokenData.attributes[0]) {
        featuredMaterial = tokenData.attributes[0].value
      }
      if (tokenData.attributes[1]) {
        rubbleCategory = tokenData.attributes[1].value
      }
    }
  }

  //random at mint check
  //randomSeed(1199)

  //rubbleNumber data
  ////////////////////////////////////////
  // let extraRandomNumberLeft = random(0.8, 1.3)
  // let extraRandomNumberRight = random(0.8, 1.3)
  // let extraRandomNumberTop = random(0.8, 1.3)
  // let extraRandomNumberBottom = random(0.8, 1.3)
  let numberOfWeirdShapesLeft,
    numberOfWeirdShapesRight,
    numberOfWeirdShapesTop,
    numberOfWeirdShapesBottom
  if (rubbleCategory == 'SPARSE') {
    numberOfWeirdShapesLeft = Math.floor(random(10, 14) * random(0.9, 1.2))
    numberOfWeirdShapesRight = Math.floor(random(10, 14) * random(0.9, 1.2))
    numberOfWeirdShapesTop = Math.floor(random(10, 14) * random(0.9, 1.2))
    numberOfWeirdShapesBottom = Math.floor(random(10, 14) * random(0.9, 1.2))
  } else if (rubbleCategory == 'MEDIUM') {
    numberOfWeirdShapesLeft = Math.floor(random(16, 19) * random(0.8, 1.3))
    numberOfWeirdShapesRight = Math.floor(random(16, 19) * random(0.8, 1.3))
    numberOfWeirdShapesTop = Math.floor(random(16, 19) * random(0.8, 1.3))
    numberOfWeirdShapesBottom = Math.floor(random(16, 19) * random(0.8, 1.3))
  } else if (rubbleCategory == 'HEAVY') {
    numberOfWeirdShapesLeft = Math.floor(random(22, 25) * random(0.9, 1.2))
    numberOfWeirdShapesRight = Math.floor(random(22, 25) * random(0.9, 1.2))
    numberOfWeirdShapesTop = Math.floor(random(22, 25) * random(0.9, 1.2))
    numberOfWeirdShapesBottom = Math.floor(random(22, 25) * random(0.9, 1.2))
  }

  // numberOfWeirdShapesLeft = Math.floor(random(10, 30)) ///was (10,20)
  // numberOfWeirdShapesRight = Math.floor(random(10, 30))
  // numberOfWeirdShapesTop = Math.floor(random(10, 30))
  // numberOfWeirdShapesBottom = Math.floor(random(10, 30))

  rubbleNumber =
    (numberOfWeirdShapesLeft +
      numberOfWeirdShapesRight +
      numberOfWeirdShapesTop +
      numberOfWeirdShapesBottom) *
    36

  // if (rubbleNumber < 2500){
  //   numberOfRocks = 'SPARSE'
  // }
  // if (rubbleNumber > 2501 && rubbleNumber < 3200){
  //   numberOfRocks = 'MEDIUM'
  // }
  // if (rubbleNumber > 3201){
  //   numberOfRocks = 'HEAVY'
  // }

  //Color Data
  backgroundColor = [44, 5, 85, 255]
  textColor = [0, 5, 20, 255]
  mainFill01 = [44, 5, 90, 255]
  borderFill = [44, 5, 90, 255]
  jewelFill01 = [0, 50, 100, 155]
  jewelFill02 = [10, 50, 90, 155]

  rockPalette = []

  if (featuredMaterial == 'IRON') {
    rockColorH = random(0, 18)
    rockColorS = random(20, 100)
    rockColorB = random(50, 100)
    contrastRockH = random(200, 220)
    contrastRockS = random(60, 80)
    contrastRockB = random(40, 90)
  } else if (featuredMaterial == 'COPPER') {
    rockColorH = random(20, 33)
    rockColorS = random(20, 80)
    rockColorB = random(50, 100)
    contrastRockH = random(180, 210)
    contrastRockS = random(60, 80)
    contrastRockB = random(40, 90)
  } else if (featuredMaterial == 'OXIDE') {
    rockColorH = random(35, 50)
    rockColorS = random(20, 80)
    rockColorB = random(50, 100)
    contrastRockH = random(200, 220)
    contrastRockS = random(60, 80)
    contrastRockB = random(40, 90)
  } else if (featuredMaterial == 'PYRITE') {
    rockColorH = random(25, 45)
    rockColorS = random(0, 20)
    rockColorB = random(90, 100)
    contrastRockH = random(20, 40)
    contrastRockS = random(70, 90)
    contrastRockB = random(60, 90)
  } else if (featuredMaterial == 'GRANITE') {
    rockColorH = random(200, 215)
    rockColorS = 0
    rockColorB = random(50, 100)
    contrastRockH = random(0, 60)
    contrastRockS = random(40, 50)
    contrastRockB = random(40, 90)
  }

  //populate the palette array with color
  for (let j = 0; j < 22; j++) {
    let rockColorC = color(rockColorH, rockColorS, rockColorB, 155)
    rockPalette.push(rockColorC)
    rockColorH += random(-10, 10)
    rockColorS += random(-5, 10)
    rockColorB += random(-10, 10)
  }

  goldHighlights = [random(30, 45), 100, random(80, 100), 155]

  // Add the palette to the colorPalettes array
  rockColorPalettes.push(rockPalette)

  //////////////////////SET UP UNITS AND CANVAS SPACE ///CHECK THIS WORKS WELL
  unit = 12
  //////////////////////canvasSetups
  //canvas space
  canvasWidth = 1866 //1866
  canvasHeight = 1866 //1866
  canvasX = 0
  canvasY = 0
  canvasLeft = canvasX - canvasWidth / 2
  canvasTop = canvasY - canvasHeight / 2
  canvasRight = canvasX + canvasWidth / 2
  canvasBottom = canvasY + canvasHeight / 2

  //frame space - setting up the parts of the poster

  borderBuffer = unit * 3
  // numberOfFrames = Math.floor(random(1, 4))
  frameOneX = canvasX
  frameOneY = canvasY
  frameOneWidth = canvasWidth
  frameOneHeight = canvasHeight

  //location data
  frameOneTop = frameOneY - frameOneHeight / 2
  frameOneBottom = frameOneY + frameOneHeight / 2
  frameOneLeft = frameOneX - frameOneWidth / 2
  frameOneRight = frameOneX + frameOneWidth / 2

  boxBuffer = unit * 7

  //strokeWeights
  strokeThick = unit * 1
  strokeThin = unit * 0.2
  strokeMap = unit * 6
  strokeMicro = unit * 0.05

  //text sizes
  labelTextSize1 = 1.3
  labelTextSize2 = 1.1
  labelTextSize3 = 1.4
  noiseScaleFactor = 0.1

  ////////////////////////SETTING UP THE FRAGMENT LOCATIONS

  // Add the coordinates of the 12 points to the array
  // make sure don't get stuck in infinite loop
  let protection = 0

  ////LOCATING THE 12 FRAGMENTS - OR RANDOM(6,18) FRAGMENTS IF I DO THAT
  while (boxPoints.length < 12) {
    let box01 = {
      x: random(frameOneLeft + boxBuffer, frameOneRight - boxBuffer),
      y: random(frameOneTop + boxBuffer, frameOneBottom - boxBuffer * 2),
      s: random(unit * boxSizeFactor * 0.9, unit * boxSizeFactor * 1.3),
    }

    // Does it overlap any previous circles?
    let overlapping = false
    for (let j = 0; j < boxPoints.length; j++) {
      let other = boxPoints[j]
      let d = dist(box01.x, box01.y, other.x, other.y)
      if (d < box01.s + other.s) {
        ////changed this to *1.2 to give a bit more space
        overlapping = true
      }
    }

    // If not keep it!
    if (!overlapping) {
      boxPoints.push(box01)
    }
    // Are we stuck?
    protection++
    if (protection > 1000) {
      break
    }
  }

  //setting the box locations
  for (let i = 0; i < boxPoints.length; i++) {
    boxLocations.push({ x: boxPoints[i].x, y: boxPoints[i].y })
  }

  //woodChips
  let woodchipAngle = random(0, TWO_PI)
  let woodchipSize = unit * 0.5

  for (let i = 0; i < numWoodchips; i++) {
    let numPoints = generateRandomEvenNumber(3, 9)
    let xOff = 0
    let yOff = random(1000, 100)
    let woodchip = new WoodchipTestB(
      0,
      0,
      woodchipSize,
      woodchipAngle,
      numPoints,
      xOff,
      yOff
    )
    woodchips.push(woodchip) // Add each woodchip to the array
  }

  //noLoop()

  ///////////// INTERFACE SPECIFIC VARIABLES
  ///wobble border vertical differentiation
  for (let i = 0; i < 20; i++) {
    let wobbleValue = random(1, frameOneHeight / 3)
    wobbleBorderValues1.push(wobbleValue)
  }
  for (let i = 0; i < 20; i++) {
    let wobbleValue = random(1, frameOneHeight / 3)
    wobbleBorderValues2.push(wobbleValue)
  }
  for (let i = 0; i < 20; i++) {
    let wobbleValue = random(1, frameOneHeight / 5)
    wobbleBorderValues3.push(wobbleValue)
  }
  for (let i = 0; i < 20; i++) {
    let wobbleValue = random(1, frameOneHeight / 5)
    wobbleBorderValues4.push(wobbleValue)
  }
  //number of wobbles
  wobbleBorderDensity = Math.floor(random(6, 18))
  wobbleBorder02Density = Math.floor(random(6, 18))
  wobbleBoxDensity = Math.floor(random(2, 5))

  //dynamic frames
  ///need to sort this out, it's not subject to scaling
  frameRectSize = height / 100

  //kelp setup
  //kelp canvas setup
  kelpCanvas01 = createGraphics(unit * 100, unit * 100)
  kelpCanvas01.rectMode(CENTER)
  kelpCanvas01.imageMode(CENTER)
  kelpCanvas01.colorMode(HSB, 360, 100, 100, 255)
  kelpCanvas01.background(20, 50, 50, 255)
  kelpCanvas01.clear()

  //kelp space
  kelpFrameLeft = unit * 15
  kelpFrameTop = unit * 15
  kelpFrameRight = unit * 85
  kelpFrameBottom = unit * 85

  //kelpShapeMaskSetups
  for (let i = 0; i < numberOfWeirdShapesLeft; i++) {
    let kelpX1 = random(kelpFrameLeft - unit * 5, kelpFrameLeft + unit * 35)
    let kelpY1 = random(kelpFrameTop - unit * 5, kelpFrameBottom + unit * 5)
    let kelpS = random(unit * random(1, 4))
    kelpShape01(kelpX1, kelpY1, kelpS)
  }
  for (let i = 0; i < numberOfWeirdShapesRight; i++) {
    let kelpX2 = random(kelpFrameRight - unit * 35, kelpFrameRight + unit * 5)
    let kelpY2 = random(kelpFrameTop - unit * 5, kelpFrameBottom + unit * 5)
    let kelpS = random(unit * random(1, 4))
    kelpShape01(kelpX2, kelpY2, kelpS)
  }
  for (let i = 0; i < numberOfWeirdShapesTop; i++) {
    let kelpX3 = random(kelpFrameLeft, kelpFrameRight)
    let kelpY3 = random(kelpFrameTop - unit * 5, kelpFrameTop + unit * 35)
    let kelpS = random(unit * random(1, 4))
    kelpShape01(kelpX3, kelpY3, kelpS)
  }
  for (let i = 0; i < numberOfWeirdShapesBottom; i++) {
    let kelpX4 = random(kelpFrameLeft, kelpFrameRight)
    let kelpY4 = random(kelpFrameBottom - unit * 35, kelpFrameBottom + unit * 5)
    let kelpS = random(unit * random(1, 4))
    kelpShape01(kelpX4, kelpY4, kelpS)
  }
  // //moving kelps
  //numberFloatingKelps = Math.floor(random(300, 600)) ///was 400,800
  numberFloatingKelps = 400

  for (let i = 0; i < numberFloatingKelps; i++) {
    let kelpMovingX = random(width * 1)
    let kelpMovingY = random(height * 1)
    let kelpMovingS = random(unit * random(0.2, 0.5))
    let kelpSpeed = random(3, 8) // Unique speed for each kelp element
    let kelpSpeedY = random(3, 8) // Unique speed for each kelp element

    // Create an object to store kelp properties
    let kelp = {
      x: kelpMovingX,
      y: kelpMovingY,
      size: kelpMovingS,
      speed: kelpSpeed,
      speedY: kelpSpeedY,
    }

    kelpElements.push(kelp) // Add each kelp object to the array
  }

  //BOX SPECIFIC VARIABLES
  ///selecting the text blocks
  story01Word01 = Math.floor(random(0, 12))
  story02Word01 = Math.floor(random(0, 12))
  story03Word01 = Math.floor(random(0, 12))
  story04Word01 = Math.floor(random(0, 12))
  story05Word01 = Math.floor(random(0, 12))
  story06Word01 = Math.floor(random(0, 12))
  story07Word01 = Math.floor(random(0, 12))
  story08Word01 = Math.floor(random(0, 12))
  story09Word01 = Math.floor(random(0, 12))
  story10Word01 = Math.floor(random(0, 12))
  story11Word01 = Math.floor(random(0, 12))
  story12Word01 = Math.floor(random(0, 12))

  story01Word02 = Math.floor(random(0, 12))
  story02Word02 = Math.floor(random(0, 12))
  story03Word02 = Math.floor(random(0, 12))
  story04Word02 = Math.floor(random(0, 12))
  story05Word02 = Math.floor(random(0, 12))
  story06Word02 = Math.floor(random(0, 12))
  story07Word02 = Math.floor(random(0, 12))
  story08Word02 = Math.floor(random(0, 12))
  story09Word02 = Math.floor(random(0, 12))
  story10Word02 = Math.floor(random(0, 12))
  story11Word02 = Math.floor(random(0, 12))
  story12Word02 = Math.floor(random(0, 12))

  story01Word03 = Math.floor(random(0, 12))
  story02Word03 = Math.floor(random(0, 12))
  story03Word03 = Math.floor(random(0, 12))
  story04Word03 = Math.floor(random(0, 12))
  story05Word03 = Math.floor(random(0, 12))
  story06Word03 = Math.floor(random(0, 12))
  story07Word03 = Math.floor(random(0, 12))
  story08Word03 = Math.floor(random(0, 12))
  story09Word03 = Math.floor(random(0, 12))
  story10Word03 = Math.floor(random(0, 12))
  story11Word03 = Math.floor(random(0, 12))
  story12Word03 = Math.floor(random(0, 12))
}

/////////////////////////////////////////////////////////

function draw() {
  background(backgroundColor)

  ///translate everything to centre
  push()
  translate(width / 2, height / 2)
  //frame One background - the same color as the rock tone
  ///modified to go all the extent of canvas, hidden by overlays at full view
  noStroke()
  fill(rockColorH, rockColorS - 10, rockColorB - 30, 155)
  rect(0, 0, width, height)

  //scale everything to window
  //make sure this is high enough res if hard-coding the rock canvas
  if (windowHeight <= windowWidth) {
    scaleFactor = (height / canvasWidth) * 0.85
  }
  if (windowWidth < windowHeight) {
    scaleFactor = (width / canvasWidth) * 0.85
  }

  scale(scaleFactor)

  //zooming elements
  push() //push and pop to keep navigation frame in all views
  // Translate the view to center point 01
  if (currentPointIndex >= 0 && currentPointIndex < boxPoints.length) {
    const { x, y } = boxPoints[currentPointIndex]
    translate(0 - x * zoomLevel, 0 - y * zoomLevel)
  }

  // Scale the view based on zoom level
  scale(zoomLevel, zoomLevel)

  //background(backgroundColor)
  fill(backgroundColor)
  //rect(0, frameOneY, frameOneWidth, frameOneHeight)

  // Draw the kelp main elements
  for (let i = 0; i < 12; i++) {
    //vertex
    let p1 = boxPoints[i]
    //objects
    push()
    translate(p1.x, p1.y)
    //scale(p1.s / 100)
    rotate(0 + QUARTER_PI * i) //added this *i/2 rotate here to avoid duplication
    scale(boxPoints[i].s / (unit * 10))
    scale(1.5)
    rotate(QUARTER_PI / 2)
    image(kelpCanvas01.get(), 0, 0)
    scale(0.8)
    rotate(HALF_PI) ///maybe remove these
    image(kelpCanvas01.get(), 0, 0)
    pop()
  }

  // Draw the kelp one overlay only
  for (let i = 0; i < 12; i++) {
    //vertex
    let p1 = boxPoints[i]
    //objects
    push()
    translate(p1.x, p1.y)
    scale(p1.s / 100)
    scale((boxSizeFactor / unit) * 1)
    rotate(QUARTER_PI - (QUARTER_PI * i) / 3)
    image(kelpCanvas01.get(), 0, 0)
    pop()
  }

  // Draw the labels
  for (let i = 0; i < 12; i++) {
    //vertex
    let p1 = boxPoints[i]
    //objects
    push()
    translate(p1.x, p1.y)
    scale(p1.s / 100)
    boxLabelArray[i](0, 0, boxPoints[i].s)
    pop()
  }

  // Draw the boxes
  for (let i = 0; i < 12; i++) {
    //vertex
    let p1 = boxPoints[i]
    //objects
    push()
    translate(p1.x, p1.y)
    scale(p1.s / 100)
    boxArray[i](0, 0 - unit, boxPoints[i].s)
    pop()
  }

  // //moving fragments of rocks
  push()
  scale(1 / scaleFactor)
  translate(0 - width / 2, 0 - height / 2)
  if (zoomLevel == zoomClose) {
    for (let i = 0; i < kelpElements.length; i++) {
      // Update the x position based on the speed
      kelpElements[i].x += kelpElements[i].speed
      kelpElements[i].y += kelpElements[i].speedY

      // Check if the kelp element has moved off the canvas
      if (kelpElements[i].x > width) {
        // Reset it to the left side of the canvas
        kelpElements[i].x = random(-width / 2, width)
        kelpElements[i].y = -20
      }

      // Draw the kelp element
      kelpShape02(
        kelpElements[i].x,
        kelpElements[i].y,
        kelpElements[i].size / 1.5
      )
    }
  }
  pop()

  //borders for zoom out view
  //opening loop for hiding frames in zoom-in
  if (zoomLevel === 1) {
    //bottom title block and frameOne border
    //opaque border
    noStroke()
    fill(0, 0, 100, 180)
    rect(
      frameOneX,
      frameOneTop + borderBuffer * 2.75,
      frameOneWidth - borderBuffer * 2,
      borderBuffer / 2
    )
    rect(
      frameOneX,
      frameOneBottom - borderBuffer * 2.75,
      frameOneWidth - borderBuffer * 2,
      borderBuffer / 2
    )
    rect(
      frameOneLeft + borderBuffer * 0.75,
      frameOneY,
      borderBuffer / 2,
      frameOneHeight
    )
    rect(
      frameOneRight - borderBuffer * 0.75,
      frameOneY,
      borderBuffer / 2,
      frameOneHeight
    )

    //locate here
    stroke(borderFill)
    strokeWeight(strokeThin)
    noFill()
    rect(
      frameOneX,
      frameOneY,
      frameOneWidth - borderBuffer * 2,
      frameOneHeight - borderBuffer * 2 - borderBuffer * 4
    )

    //top title block TEST
    stroke(0, 0, 100, 50)
    strokeWeight(strokeThin)
    //fill(borderFill)
    fill(44, 5, 93, 255)
    rect(
      frameOneX,
      frameOneTop + borderBuffer / 2,
      frameOneWidth - borderBuffer,
      unit * 12 - 1
    )

    stroke(borderFill)
    strokeWeight(strokeThin)
    noFill()
    rect(
      frameOneX,
      frameOneY,
      frameOneWidth - borderBuffer * 2,
      frameOneHeight - borderBuffer * 6
    )

    //alien writing
    push()
    translate(0 - canvasWidth / 2, 0 - canvasHeight / 2 - borderBuffer * 3)
    //scale(1, (borderBuffer * 12) / height)
    //scale(0.5)
    noFill()
    for (let i = 0; i < 10; i++) {
      //for (let j=0; j<3; j++){
      //translate(i*10,0)
      widthOfWriting = canvasWidth / 2.5
      heightOfWriting = 0.3
      strokeWeight(unit * 2)
      stroke(0, 0, 100, 255)
      wobbleBorder(-3, heightOfWriting, widthOfWriting)
      strokeWeight(unit * 2)
      stroke(44, 10, 65, 255)
      wobbleBorder(3, heightOfWriting, widthOfWriting)
      strokeWeight(unit * 1.8)
      stroke(44, 5, 94, 255)
      wobbleBorder(0, heightOfWriting, widthOfWriting)
      //}
    }
    pop()
    //right side
    push()
    translate(0 + canvasWidth / 8, 0 - canvasHeight / 2 - borderBuffer * 2)
    //scale(1, (borderBuffer * 12) / height)
    //scale(0.5)
    noFill()
    for (let i = 0; i < 10; i++) {
      //for (let j=0; j<3; j++){
      //translate(i*10,0)
      widthOfWriting = canvasWidth / 2.5
      heightOfWriting = 0.3
      strokeWeight(unit * 2)
      stroke(0, 0, 100, 255)
      wobbleBorder02(-3, heightOfWriting, widthOfWriting)
      strokeWeight(unit * 2)
      stroke(44, 10, 65, 255)
      wobbleBorder02(3, heightOfWriting, widthOfWriting)
      strokeWeight(unit * 1.8)
      //stroke(mainFill01)
      stroke(44, 5, 94, 255)
      wobbleBorder02(0, heightOfWriting, widthOfWriting)
      //}
    }
    pop()

    //bottom title block
    noStroke()
    fill(contrastRockH, contrastRockS, contrastRockB, 255)
    //fill(rockColorH, rockColorS, rockColorB, 255)
    rect(
      frameOneX,
      frameOneBottom - borderBuffer / 2,
      frameOneWidth - borderBuffer,
      unit * 12
    )

    //draw the colored slices
    for (let i = 0; i < 5; i++) {
      ////used to be i<4
      noStroke()
      let randomPaletteIndex = floor(random(rockColorPalettes.length))
      let selectedColor = rockColorPalettes[randomPaletteIndex][1 + i]
      fill(selectedColor)
      rect(
        boxPoints[i].x,
        frameOneBottom - borderBuffer / 2,
        boxPoints[i + 1].x - boxPoints[i].x,
        borderBuffer * 4
      )
    }

    //contrast fill
    fill(contrastRockH, contrastRockS, contrastRockB, 155)
    rect(
      boxPoints[1].x,
      frameOneBottom - borderBuffer / 2,
      borderBuffer,
      borderBuffer * 4
    )
    //contrast fill 2
    fill(contrastRockH + 180, contrastRockS - 50, contrastRockB, 155)
    rect(
      boxPoints[8].x + unit * 2,
      frameOneBottom - borderBuffer / 2,
      borderBuffer,
      borderBuffer * 4
    )
    //contrast fill 3
    fill(jewelFill01)
    rect(
      boxPoints[3].x + unit * 2,
      frameOneBottom - borderBuffer / 2,
      borderBuffer,
      borderBuffer * 4
    )
    //contrast fill 4
    fill(jewelFill02)
    rect(
      boxPoints[9].x + unit * 2,
      frameOneBottom - borderBuffer / 2,
      borderBuffer,
      borderBuffer * 4
    )

    // // Draw the lines
    for (let i = 0; i < 11; i++) {
      //connecting lines
      strokeWeight(1.5)
      stroke(backgroundColor)
      noFill()
      line(
        boxPoints[i].x,
        frameOneBottom - borderBuffer * 2.5,
        boxPoints[i].x,
        frameOneBottom + borderBuffer * 1.5
      )
    }

    //patch border
    noStroke()
    fill(borderFill)
    rect(frameOneX, frameOneTop - unit * 6, frameOneWidth, borderBuffer)
    rect(frameOneX, frameOneBottom + unit * 6, frameOneWidth, borderBuffer)
    rect(frameOneLeft, frameOneY, borderBuffer, frameOneHeight + unit * 12)
    rect(frameOneRight, frameOneY, borderBuffer, frameOneHeight + unit * 12)

    noStroke()

    //edging border (covering the edges)
    sidePanelWidth = (width / scaleFactor - canvasWidth) / 2
    topPanelWidth = (height / scaleFactor - canvasHeight) / 2 - unit * 6

    fill(0, 0, 0, 255)
    rect(
      0 - (width * 0.5) / scaleFactor + sidePanelWidth / 2,
      0,
      sidePanelWidth,
      height / scaleFactor
    )
    rect(
      0 + (width * 0.5) / scaleFactor - sidePanelWidth / 2,
      0,
      sidePanelWidth,
      height / scaleFactor
    )
    rect(
      0,
      0 + (height * 0.5) / scaleFactor - topPanelWidth / 2,
      width / scaleFactor,
      topPanelWidth
    )
    rect(
      0,
      0 - (height * 0.5) / scaleFactor + topPanelWidth / 2,
      width / scaleFactor,
      topPanelWidth
    )

    //extra shadow of slide
    noStroke()
    fill(44, 5, 80, 255)
    rect(canvasLeft - 4, 4, 6, canvasHeight + unit * 12 + 4)
    rect(-4, canvasBottom + unit * 6 + 4, canvasWidth, 6)

    noFill()
    strokeWeight(strokeMicro)
    stroke(0, 0, 0, 255)
    line(canvasLeft, canvasTop - unit * 6, canvasLeft, canvasBottom + unit * 6)
    line(
      canvasLeft,
      canvasBottom + unit * 6,
      canvasRight,
      canvasBottom + unit * 6
    )
    stroke(0, 0, 100, 255)
    line(
      canvasRight,
      canvasTop - unit * 6,
      canvasRight,
      canvasBottom + unit * 6
    )
    line(canvasLeft, canvasTop - unit * 6, canvasRight, canvasTop - unit * 6)
  } //closing loop for hiding frames in zoom-in

  //////////////////////////////////
  pop() ///closing the zooming scope
  ///////////////////////////////
  ////////////ZOOM SCOPE HAS BEEN CLOSED HERE
  ////////////WHAT FOLLOWS BELOW REMAINS IN FRAME THROUGHOUT

  pop() ///closing the resize to window scope

  //corner navigation alien writing
  //little map ///// not in zoom loop
  push()
  translate(
    width / 2,
    height / 2 -
      (canvasHeight / 2) * scaleFactor +
      (borderBuffer / 2) * scaleFactor
  )
  ///ok this is causing problems because it's not being scaled
  //// and units are now hard-coded
  ///so i need to measure out from the centre
  scale(0.075 * scaleFactor)
  fill(0, 0, 0, 255)
  noStroke()
  rect(frameOneX, frameOneY, frameOneWidth)
  //grid lines
  stroke(backgroundColor)
  strokeWeight(strokeMap)
  line(
    frameOneX - frameOneWidth * 0.15,
    frameOneY - frameOneWidth * 0.5,
    frameOneX - frameOneWidth * 0.15,
    frameOneY + frameOneWidth * 0.5
  )
  line(
    frameOneX + frameOneWidth * 0.15,
    frameOneY - frameOneWidth * 0.5,
    frameOneX + frameOneWidth * 0.15,
    frameOneY + frameOneWidth * 0.5
  )
  line(
    frameOneX - frameOneWidth * 0.5,
    frameOneY - frameOneWidth * 0.15,
    frameOneX + frameOneWidth * 0.5,
    frameOneY - frameOneWidth * 0.15
  )
  line(
    frameOneX - frameOneWidth * 0.5,
    frameOneY + frameOneWidth * 0.15,
    frameOneX + frameOneWidth * 0.5,
    frameOneY + frameOneWidth * 0.15
  )

  for (let i = 0; i < 12; i++) {
    //vertex
    let p1 = boxPoints[i]
    //objects
    push()
    translate(p1.x, p1.y)
    scale(p1.s / 100)
    scale((boxSizeFactor / unit) * 1)
    fill(backgroundColor)
    noStroke()
    circle(0, 0, 300)
    pop()
  }

  noFill()

  if (currentPointIndex >= 0 && currentPointIndex < boxPoints.length) {
    const { x, y } = boxPoints[currentPointIndex]
    noStroke()
    fill(20, 100, 100, 155)
    circle(x, y, random(unit * 20, unit * 40))
    fill(20, 100, 100, 255)
    circle(x, y, unit * 20) // Adjust the size and other parameters as needed
  }
  pop()
  //}

  //kelpShape02(200,200,100)

  //checking traits
  // fill(220, 100, 100, 255)
  // //text(numberOfRocks, width / 2, unit * 2)
  // text(featuredMaterial, width / 2, unit * 2)
  //text(rubble, width / 2, unit * 4)
  //rock number trait

  // text(rubbleNumber, width / 4, unit * 2)
  // text(scaleFactor, width / 4, unit * 2)
  // text(sidePanelWidth, width / 6, unit * 2)
  // text(canvasWidth, width / 7, unit * 2)
  // text(width, width / 8, unit * 2)

  // fill(40,100,100,255)
  // rect(frameOneX, frameOneY, frameOneWidth, frameOneHeight)
}

function mousePressed() {
  currentPointIndex++

  // Wrap around when reaching the end
  if (currentPointIndex > boxPoints.length) {
    currentPointIndex = 0
  }

  if (currentPointIndex === 0) {
    const { x, y } = boxPoints[0]
    translate(width / 2 - x * zoomLevel, height / 2 - y * zoomLevel)
    zoomLevel = zoomClose ////used to be 5
  } else if (currentPointIndex === boxPoints.length) {
    translate(width / 2, height / 2)
    zoomLevel = 1
  }
  if (zoomLevel == 1) {
    noLoop()
  } else {
    loop()
  }
  return false
}

function keyPressed() {
  // Save the canvas as a PNG image with a high resolution
  if (key === ' ') {
    saveCanvas('LLM', 'png')
  }
}

function box01(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[0].display()
  pop()
}

function box02(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[1].display()
  pop()
}

function box03(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[2].display()
  pop()
}

function box04(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[3].display()
  pop()
}

function box05(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[4].display()
  pop()
}

function box06(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[5].display()
  pop()
}

function box07(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[6].display()
  pop()
}

function box08(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[7].display()
  pop()
}

function box09(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[8].display()
  pop()
}

function box10(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[9].display()
  pop()
}

function box11(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[10].display()
  pop()
}

function box12(x, y, s) {
  push()
  translate(x, y)
  scale(zoomClose)
  woodchips[11].display()
  pop()
}

function box13(x, y, s) {
  translate(x, y)
  noStroke()
  rect(0, 0, s, s * 2, s * 0.6)
  fill(backgroundColor)
  noStroke()
  rect(0, 0, s * 0.6, s * 2, s * 0.6)
  fill(textColor)
  noStroke()
  text('13', 0, 0)
}

//labels
function box01Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text('1.', 0 - s * 1, y + s * 0.6)
  text(labelTextWord01[0][story01Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text(labelTextWord02[0][story01Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord03[0][story01Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box02Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text('2.', 0 - s * 1, y + s * 0.6)
  text(labelTextWord01[1][story02Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text(labelTextWord02[1][story02Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord03[1][story02Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box03Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text('3.', 0 - s * 1, y + s * 0.6)
  text(labelTextWord01[2][story03Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text(labelTextWord02[2][story03Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text(labelTextWord03[2][story03Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box04Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text('4.', 0 - s * 1, y + s * 0.6)
  text(labelTextWord01[3][story04Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text(labelTextWord02[3][story04Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord03[3][story04Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box05Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text('5.', 0 - s * 1, y + s * 0.6)
  text(labelTextWord01[4][story05Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text(labelTextWord02[4][story05Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord03[4][story05Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box06Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text('6.', 0 - s * 1, y + s * 0.6)
  text(labelTextWord01[5][story06Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text(labelTextWord02[5][story06Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord03[5][story06Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box07Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text('7.', 0 - s * 1, y + s * 0.6)
  text(labelTextWord01[6][story07Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text(labelTextWord02[6][story07Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord03[6][story07Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box08Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text('8.', 0 - s * 1, y + s * 0.6)
  text(labelTextWord01[7][story08Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text(labelTextWord02[7][story08Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord03[7][story08Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box09Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text('9.', 0 - s * 1, y + s * 0.6)
  text(labelTextWord01[8][story09Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text(labelTextWord02[8][story09Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord03[8][story09Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box10Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text('10.', 0 - s * 1.1, y + s * 0.6)
  text(labelTextWord01[9][story10Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text(labelTextWord02[9][story10Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord03[9][story10Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box11Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text('11.', 0 - s * 1.1, y + s * 0.6)
  text(labelTextWord01[10][story11Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text(labelTextWord02[10][story11Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord03[10][story11Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box12Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(0.5)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text('12.', 0 - s * 1.1, y + s * 0.6)
  text(labelTextWord01[11][story12Word01], 0 - s * 0.8, y + s * 0.6)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord02[11][story12Word02], 0 - s * 0.8, y + s * 0.75)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text(labelTextWord03[11][story12Word03], 0 - s * 0.8, y + s * 0.9)
  pop()
}
function box13Label(x, y, s) {
  push()
  translate(x, y)
  //text
  stroke(textColor)
  strokeWeight(1)
  fill(backgroundColor)
  textSize(s * noiseScaleFactor * labelTextSize1)
  text('13.', 0 - s * 2, y + s * 0.8)
  text(labelTextWord01[12][story02Word01], 0 - s, y + s * 0.8)
  textSize(s * noiseScaleFactor * labelTextSize3)
  text(labelTextWord02[12][story02Word02], 0, y + s * 0.8)
  textSize(s * noiseScaleFactor * labelTextSize2)
  text(labelTextWord03[12][story02Word03], 0 + s, y + s * 0.8)
  pop()
}

function kelpShape01(x, y, size) {
  numPoints = int(random(6, 9))
  points = []
  for (let i = 0; i < numPoints; i++) {
    let r = random(0.5, 1.0) * size
    let angle = (i * TWO_PI) / numPoints
    let px = r * cos(angle)
    let py = r * sin(angle)
    points.push(createVector(px, py))
  }

  //shadow
  kelpCanvas01.push()
  kelpCanvas01.translate(x - unit, y + unit)
  kelpCanvas01.beginShape()
  kelpCanvas01.fill(0, 0, 0, 200)
  kelpCanvas01.noStroke()
  // kelpCanvas01.stroke(backgroundColor)
  // kelpCanvas01.strokeWeight(random(size))
  for (let i = 0; i < points.length; i++) {
    let p1 = points[i]
    let p2 = points[(i + 1) % points.length]
    let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, 0.1))
    let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, 0.1))
    kelpCanvas01.vertex(p1.x, p1.y)
    kelpCanvas01.bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
  }
  kelpCanvas01.endShape(CLOSE)
  kelpCanvas01.pop()

  //main objects
  kelpCanvas01.push()
  kelpCanvas01.translate(x, y)
  kelpCanvas01.beginShape()

  //OLD PALETTE WAY OF DOING IT:
  // kelpCanvas01.fill(rockColorArray[Math.floor(random(rockColorArray.length))])
  // let randomKelpColorIndex = int(random(8, 13))
  // kelpCanvas01.fill(colorPalette[colorPaletteNum][randomKelpColorIndex])

  //NEW RANDOM SELECTION WAY OF DOING IT:
  let randomPaletteIndex = floor(random(rockColorPalettes.length))
  let randomRockColorIndex = floor(
    random(rockColorPalettes[randomPaletteIndex].length)
  )
  let selectedColor =
    rockColorPalettes[randomPaletteIndex][randomRockColorIndex]
  kelpCanvas01.fill(selectedColor)
  kelpCanvas01.noStroke()
  for (let i = 0; i < points.length; i++) {
    let p1 = points[i]
    let p2 = points[(i + 1) % points.length]
    let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, 0.1))
    let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, 0.1))
    kelpCanvas01.vertex(p1.x, p1.y)
    kelpCanvas01.bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
  }
  kelpCanvas01.endShape(CLOSE)
  kelpCanvas01.pop()

  //inset layers of transparent WHITE to give shaded effect
  for (let j = 55; j < 85; j += 6) {
    kelpCanvas01.push()
    kelpCanvas01.translate(x, y)
    kelpCanvas01.scale(j / 100)
    kelpCanvas01.fill(220, 0, 100, 10)
    kelpCanvas01.noStroke()
    kelpCanvas01.beginShape()
    for (let i = 0; i < points.length; i++) {
      let p1 = points[i]
      let p2 = points[(i + 1) % points.length]
      let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, 0.1))
      let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, 0.1))
      kelpCanvas01.vertex(p1.x, p1.y)
      //kelpCanvas01.bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
    }
    kelpCanvas01.endShape(CLOSE)
    kelpCanvas01.pop()
  }

  //ADD HIGHLIGHTS
  kelpCanvas01.push()
  kelpCanvas01.translate(x - size * 1, y - size * 0.3)
  kelpCanvas01.scale(0.3)
  kelpCanvas01.rotate(HALF_PI)
  kelpCanvas01.fill(contrastRockH, contrastRockS, contrastRockB, 155)
  kelpCanvas01.noStroke()
  kelpCanvas01.beginShape()
  for (let i = 0; i < points.length; i++) {
    let p1 = points[i]
    let p2 = points[(i + 1) % points.length]
    kelpCanvas01.vertex(p1.x, p1.y)
  }
  kelpCanvas01.endShape(CLOSE)
  kelpCanvas01.pop()

  //ADD GOLD HIGHLIGHTS
  kelpCanvas01.push()
  kelpCanvas01.translate(x + size * 4, y - size * 6)
  kelpCanvas01.scale(0.3)
  kelpCanvas01.rotate(HALF_PI)
  kelpCanvas01.fill(goldHighlights)
  kelpCanvas01.noStroke()
  kelpCanvas01.beginShape()
  for (let i = 0; i < points.length; i++) {
    let p1 = points[i]
    kelpCanvas01.vertex(p1.x, p1.y)
  }
  kelpCanvas01.endShape(CLOSE)
  kelpCanvas01.pop()

  //inset layers of transparent WHITE to give shaded effect to gold highlights
  for (let j = 0; j < 25; j += 3) {
    //used to be j<25 j+=3
    kelpCanvas01.push()
    kelpCanvas01.translate(x + size * 4, y - size * 6)
    kelpCanvas01.scale(0.3)
    kelpCanvas01.rotate(HALF_PI)
    kelpCanvas01.scale(j / 30)
    kelpCanvas01.fill(0, 10, 100, 45)
    kelpCanvas01.noStroke()
    kelpCanvas01.beginShape()
    for (let i = 0; i < points.length; i++) {
      let p1 = points[i]
      kelpCanvas01.vertex(p1.x, p1.y)
    }
    kelpCanvas01.endShape(CLOSE)
    kelpCanvas01.pop()
  }

  //ADD SMALL HIGHLIGHTS
  kelpCanvas01.push()
  kelpCanvas01.translate(x + size * 0.5, y + size * 0.5)
  kelpCanvas01.scale(0.2)
  kelpCanvas01.rotate(HALF_PI)
  kelpCanvas01.fill(40, 20, 100, 200)
  kelpCanvas01.noStroke()
  kelpCanvas01.beginShape()
  for (let i = 0; i < points.length; i++) {
    let p1 = points[i]
    let p2 = points[(i + 1) % points.length]
    let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, 0.1))
    let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, 0.1))
    kelpCanvas01.vertex(p1.x, p1.y)
    kelpCanvas01.bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
  }
  kelpCanvas01.endShape(CLOSE)
  kelpCanvas01.pop()
}

function kelpShape02(x, y, size) {
  numPoints = int(random(7, 10))
  points = []
  for (let i = 0; i < numPoints; i++) {
    let r = random(0.5, 1.0) * size
    let angle = (i * TWO_PI) / numPoints
    let px = r * cos(angle)
    let py = r * sin(angle)
    points.push(createVector(px, py))
  }
  //shadow
  push()
  translate(x - unit / 2, y + unit / 2)
  beginShape()
  fill(0, 0, 0, 155)
  noStroke()
  for (let i = 0; i < points.length; i++) {
    let p1 = points[i]
    let p2 = points[(i + 1) % points.length]
    let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, 0.1))
    let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, 0.1))
    vertex(p1.x, p1.y)
    bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
  }
  endShape(CLOSE)
  pop()

  //main objects
  push()
  translate(x, y)
  beginShape()

  //NEW RANDOM SELECTION WAY OF DOING IT:
  let randomPaletteIndex = floor(random(rockColorPalettes.length))
  let randomRockColorIndex = floor(
    random(rockColorPalettes[randomPaletteIndex].length)
  )
  let selectedColor =
    rockColorPalettes[randomPaletteIndex][randomRockColorIndex]
  fill(selectedColor)
  noStroke()
  for (let i = 0; i < points.length; i++) {
    let p1 = points[i]
    let p2 = points[(i + 1) % points.length]
    let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, 0.1))
    let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, 0.1))
    vertex(p1.x, p1.y)
    bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
  }
  endShape(CLOSE)
  pop()
}

class WoodchipTestB {
  constructor(x, y, w, woodchipAngle, numPoints, xOff, yOff) {
    this.points = []
    this.points2 = []
    this.angleIncrement = TWO_PI / numPoints
    this.x = x
    this.y = y
    this.w = w
    this.woodchipAngle = woodchipAngle
    this.numPoints = numPoints
    this.xOff = xOff
    this.yOff = yOff
    this.controlFactor = 0.15

    //this.numPoints = this.numPoints % 2 === 0 ? this.numPoints : this.numPoints + 1; // Ensure it's even

    for (let i = 0; i < this.numPoints; i++) {
      let r = random(0.5, 1.0) * this.w
      let angle = (i * TWO_PI) / this.numPoints
      let px = r * cos(angle)
      let py = r * sin(angle)
      this.points.push(createVector(px, py))
    }

    for (let i = 0; i < this.numPoints; i++) {
      let r2 = random(0.5, 0.9) * this.w
      let angle2 = (i * TWO_PI) / this.numPoints
      let px2 = r2 * cos(angle2)
      let py2 = r2 * sin(angle2)
      this.points2.push(createVector(px2, py2))
    }
  }

  display() {
    //pin shadow
    noStroke()
    fill(30, 100, 0, 155)
    circle(0 - this.w * 0.05, 0 + this.w * 1.05, this.w / 4)
    //string
    stroke(0, 0, 0, 255)
    strokeWeight(strokeMicro / 6)
    line(0, 0 + this.w, this.x, this.y)
    stroke(0, 0, 100, 255)
    strokeWeight(strokeMicro / 12)
    line(0, 0 + this.w - strokeMicro / 12, this.x, this.y)
    //pin
    noStroke()
    fill(0, 0, 0, 255)
    circle(0, 0 + this.w, this.w / 4.9)
    fill(20, 100, 100, 255)
    circle(0, 0 + this.w, this.w / 5)
    for (let i = 0; i < this.w / 4; i += this.w / 24) {
      fill(0, 0, 100, 40)
      circle(0, 0 + this.w, i)
    }
    fill(20, 100, 100, 255)
    //circle(0, 0+this.w, this.w / 10)

    if (zoomLevel == zoomClose) {
      // Apply Perlin noise to the rectangle's position
      let noiseX = noise(this.xOff) * 2 - 1 // Mapping the noise to the range [-1, 1]
      let noiseY = noise(this.yOff) * 2 - 1 // Mapping the noise to the range [-1, 1]

      // Update the rectangle's position based on noise
      this.x = 0 + noiseX * 10 // Adjust the magnitude of movement with *10
      this.y = 0 + noiseY * 10 // Adjust the magnitude of movement with *10

      // Increment the noise offset values for the next frame
      this.xOff += 0.01 // Adjust the noise speed
      this.yOff += 0.01 // Adjust the noise speed
    }

    //shadow drop
    push()
    translate(this.x - 0.1, this.y + 0.2)
    beginShape()
    //PALETTE WAY OF DOING IT:
    // fill(colorPalette[colorPaletteNum][this.colorIndex])
    fill(rockColorH, rockColorS, 0, 155)
    noStroke()
    for (let i = 0; i < this.points.length; i++) {
      let p1 = this.points[i]
      let p2 = this.points[(i + 1) % this.points.length]
      let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, 0.1))
      let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, 0.1))
      vertex(p1.x, p1.y)
      bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
    }
    endShape(CLOSE)
    pop()

    //main shape
    push()
    translate(this.x, this.y)
    beginShape()
    fill(44, 5, 85, 155) //an opaque version of the background neutral color
    noStroke()
    for (let i = 0; i < this.points.length; i++) {
      let p1 = this.points[i]
      let p2 = this.points[(i + 1) % this.points.length]
      let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, 0.1))
      let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, 0.1))
      vertex(p1.x, p1.y)
      bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
    }
    endShape(CLOSE)
    pop()

    //inset shape shading
    push()
    translate(this.x, this.y)
    beginShape()
    if (zoomLevel == zoomClose) {
      fill(0, 10, 10, 255)
    } else fill(rockColorH, rockColorS - 20, rockColorB - 20, 155)
    noStroke()
    let isConvex = true // Flag to alternate between convex and concave curves
    for (let i = 0; i < this.points.length; i++) {
      let p1 = this.points[i]
      let p2 = this.points[(i + 1) % this.points.length]
      let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, isConvex ? 0.1 : -0.1)) // Adjust control points
      let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, isConvex ? 0.1 : -0.1)) // Adjust control points
      vertex(p1.x, p1.y)
      bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
      isConvex = !isConvex // Toggle between convex and concave
    }
    endShape(CLOSE)
    pop()

    //black shine lowlight
    push()
    translate(this.x, this.y)
    scale(0.5)
    rotate(this.woodchipAngle)
    beginShape()
    if (zoomLevel == zoomClose) {
      fill(220, 0, 0, 255) //full black
    } else fill(rockColorH - 10, rockColorS - 20, rockColorB - 20, 155)
    stroke(0, 0, 100, 50)
    noStroke()
    for (let i = 0; i < this.points2.length; i++) {
      let p1 = this.points2[i]
      let p2 = this.points2[(i + 1) % this.points2.length]
      let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, 0.1))
      let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, 0.1))
      vertex(p1.x, p1.y)
      bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
    }
    endShape(CLOSE)
    pop()

    //main shape inset panel
    push()
    translate(this.x, this.y)
    scale(0.6)
    noFill()
    strokeWeight(strokeMicro)
    stroke(220, 100, 100, 30)
    beginShape()
    for (let i = 0; i < this.points.length; i++) {
      let p1 = this.points[i]
      let p2 = this.points[(i + 1) % this.points.length]
      let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, 0.1))
      let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, 0.1))
      vertex(p1.x, p1.y)
      bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
    }
    endShape(CLOSE)
    strokeWeight(strokeMicro / 4)
    stroke(220, 0, 100, 50)
    beginShape()
    for (let i = 0; i < this.points.length; i++) {
      let p1 = this.points[i]
      let p2 = this.points[(i + 1) % this.points.length]
      let c1 = p5.Vector.add(p1, p5.Vector.mult(p1, 0.1))
      let c2 = p5.Vector.add(p2, p5.Vector.mult(p2, 0.1))
      vertex(p1.x, p1.y)
      bezierVertex(c1.x, c1.y, c2.x, c2.y, p2.x, p2.y)
    }
    endShape(CLOSE)
    pop()

    noStroke()
    fill(backgroundColor)
    ellipse(this.x - this.w / 6, this.y, this.w / 6)
    ellipse(this.x + this.w / 6, this.y, this.w / 6)

    fill(20, 100, 100, 255)
    ellipse(this.x - this.w / 6, this.y, this.w / 8, (this.w / 8) * woodchipEye)
    ellipse(this.x + this.w / 6, this.y, this.w / 8, (this.w / 8) * woodchipEye)

    fill(0, 0, 0, 255)
    ellipse(
      this.x - this.w / 6,
      this.y,
      this.w / 15,
      (this.w / 15) * woodchipEye
    )
    ellipse(
      this.x + this.w / 6,
      this.y,
      this.w / 15,
      (this.w / 15) * woodchipEye
    )
  }
}

function generateRandomEvenNumber(min, max) {
  let num = int(random(min, max + 1)) // Generate a random integer between min and max
  return num % 2 === 0 ? num : num + 1 // Ensure it's even
}

function wobbleBorder(yPos, heightDifferential, size) {
  let arcRadius = size / wobbleBorderDensity - 1
  let startAngle = PI
  let endAngle = 0

  //TOP RADIUS ROW
  for (let i = 0; i < size; i += arcRadius * 2) {
    let j = int(i / (arcRadius * 1.9)) // Calculate the index j based on the current x position
    arc(
      i,
      yPos + wobbleBorderValues1[j] * heightDifferential,
      arcRadius,
      arcRadius,
      startAngle,
      endAngle
    )
  }

  //BOTTOM RADIUS ROW
  for (let i = arcRadius; i < size; i += arcRadius * 2) {
    let j = int(i / (arcRadius * 1.9)) // Calculate the index j based on the current x position
    arc(
      i,
      yPos + wobbleBorderValues2[j] * heightDifferential,
      arcRadius,
      arcRadius,
      startAngle + PI,
      endAngle - PI
    )
  }
  ///JOINING LINES
  for (let i = arcRadius * 0.5; i < size; i += arcRadius) {
    let j = int(i / arcRadius) // Calculate the index j based on the current x position
    line(
      i,
      yPos + wobbleBorderValues1[j] * heightDifferential,
      i,
      yPos + wobbleBorderValues2[j] * heightDifferential
    )
  }
}

function wobbleBorder02(yPos, heightDifferential, size) {
  let arcRadius = size / wobbleBorder02Density - 1
  let startAngle = PI
  let endAngle = 0

  for (let i = 0; i < size; i += arcRadius * 2) {
    let j = int(i / (arcRadius * 1.9)) // Calculate the index j based on the current x position
    arc(
      i,
      yPos + wobbleBorderValues3[j] * heightDifferential,
      arcRadius,
      arcRadius,
      startAngle,
      endAngle
    )
  }

  for (let i = arcRadius; i < size; i += arcRadius * 2) {
    let j = int(i / (arcRadius * 1.9)) // Calculate the index j based on the current x position
    arc(
      i,
      yPos + wobbleBorderValues4[j] * heightDifferential,
      arcRadius,
      arcRadius,
      startAngle + PI,
      endAngle - PI
    )
    //ellipse(i, yPos - wobbleBorderValues2[j] * heightDifferential +unit*2, unit*0.5)
  }
  // push()
  for (let i = arcRadius * 0.5; i < size; i += arcRadius) {
    let j = int(i / arcRadius) // Calculate the index j based on the current x position
    line(
      i,
      yPos + wobbleBorderValues3[j] * heightDifferential,
      i,
      yPos + wobbleBorderValues4[j] * heightDifferential
    )
    //ellipse(i+unit*2, yPos + (wobbleBorderValues1[j]* heightDifferential), unit*0.1, unit)
  }
  // pop()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
