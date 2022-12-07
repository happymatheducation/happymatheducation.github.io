function Practice() {

    return (
        <>
            <h1 style={{ marginTop: '20px', textAlign: 'center', marginBottom: '10px', fontSize: 'max(3vw, 20px)' }}>Ultimate
                Practice</h1>

            <button className="collapsible" id='introduction' onClick={
                () => {
                    var me = document.getElementById('introduction')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                        console.log(me.id, content.scrollHeight)
                    }
                }
            }>Introduction (Click)
            </button>
            <div width='60%' className="content" style={{ marginTop: '10px', marginBottom: '10px' }}>
                <div style={{ justifyContent: 'space-between' }}>
                    <h1 style={{ display: 'inline', fontSize: 'max(13px, 1.3vw)' }}>
                        Below are some topic based problems created by Happy Math Education (a.k.a Blessed Eduloo before 2021). If
                        the creator is a volunteering student, then the name of the volunteer appears on the top right in each page.
                        <br /><br />Each set is designed to be a THOROUGH practice on that specific topic, therefore:
                        <br />1. There are many problems in each set;
                        <br />2. The level of difficulty may change drastically between different problems in the same
                        set;
                        <br />3. There is no need to FINISH a set of problems. Usually, finishing 10% of a set of
                        problems is good enough to make you an expert on that topic;
                        <br />4. If you really want to finish a set, don't expect to finish it in one sitting.
                        <br /><br />This list of problems, including the answers and practice apps are constantly being
                        updated.
                    </h1>
                </div>
            </div>

            <button className="collapsible" id='fundamentals' onClick={
                () => {
                    var me = document.getElementById('fundamentals')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                        console.log(me.id, content.scrollHeight)
                    }
                }
            }>Fundamentals
            </button>
            <div className="content" style={{ maxHeight: '500px' }}>
                <div style={{ justifyContent: 'space-between' }}>
                    <div className='practicediv'>
                        <a style={{ display: 'inline' }}
                            href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/arithmetic_sequence.pdf'
                        >Arithmetic Sequence</a>
                    </div>
                    <div className='practicediv'>
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/mental_math_with_basic_algebra.pdf'
                        >Mental Math with Basic Algebra</a> | 
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/mental_math_with_basic_algebra_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/basic_similar_triangles.pdf'
                        >Basic Similar Triangles</a> | 
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/basic_similar_triangles_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/two_line_intersection.pdf'
                        >Two Line Intersection</a> | 
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/two_line_intersection_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/line_through_two_points.pdf'
                        >Line Through Two Points</a> | 
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/line_through_two_points_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/number_of_factors.pdf'
                        >Number of Factors</a> |
                        <a href='/Practice/NumberOfFactors'>App</a>
                    </div>
                    <div className='practicediv'>
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/rolling_dice.pdf'
                        >Rolling Dice</a> | 
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/rolling_dice_answers.pdf'
                        >Answers</a>
                    </div>
                    <div className='practicediv'>
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_equations.pdf'
                        >Quadratic Equations</a> |                        
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_equations_answers.pdf'
                        >Answers</a> | 
                        <a href='/Practice/Quadratic_Equations'>App</a>

                    </div>
                    <div className='practicediv'>
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/euclid_theorem.pdf'
                        >Euclid Theorem</a> | 
                        <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/euclid_theorem_answers.pdf'
                        >Answers</a>
                    </div>
                </div>
            </div>

            <button className="collapsible" id='intermediate' onClick={
                () => {
                    var me = document.getElementById('intermediate')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                        console.log(me.id, content.scrollHeight)
                    }
                }
            }>Intermediate
            </button>
            <div className="content" style={{ maxHeight: '500px' }}>
                <div style={{ justifyContent: 'space-between' }}>
                    <h1 style={{ display: 'inline', fontSize: '10px', color: '', }}>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/prime_factoriazation_for_factorials.pdf'
                            >Prime Factorization For Factorials</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/prime_factoriazation_for_factorials_answers.pdf'
                            >Answers</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_diophantine_equations_-_type_ab.pdf'
                            >Quadratic Diophantine Equations Type ab</a> |
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_diophantine_equations_-_type_ab_answers.pdf'
                            >Answers</a> | 
                            <a href='/Practice/Quadratic_Diophantine_Equations_Type_ab'>App</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_diophantine_equations_-_simple_square_type.pdf'
                            >Quadratic Diophantine Equations - Simple Square Type</a> |
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/quadratic_diophantine_equations_-_simple_square_type_answer.pdf'
                            >Answers</a> | 
                            <a href='/Practice/Quadratic_Diophantine_Equations_Simple_Square_Type'>App</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/trigs_of_special_angles.pdf'
                            >Trigs of Special Angles</a> | 
                            <a href='/Practice/Trigs_Of_Special_Angles'>App</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/remainder.pdf'
                            >Find Remainders</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/remainder_answers.pdf'
                            >Answers</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/binomial_theorem.pdf'
                            >Binomial Theorem</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/binomial_theorem_answers.pdf'
                            >Answers</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/logarithm_with_quadratic_equations.pdf'
                            >Logarithm with Quadratic Equations</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/logarithm_with_quadratic_equations_answers.pdf'
                            >Answers</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/starts_and_bars.pdf'
                            >Stars and Bars</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/starts_and_bars_answers.pdf'
                            >Answers</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/chinese_remainder_theorem.pdf'
                            >Chinese Remainder Theorem</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/magic_squares_3x3.pdf'
                            >Magic Squares</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/magic_squares_3x3_answers.pdf'
                            >Answers</a>
                        </div>
                    </h1>
                </div>
            </div>

            <button className="collapsible" id='advanced' onClick={
                () => {
                    var me = document.getElementById('advanced')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                        console.log(me.id, content.scrollHeight)
                    }
                }
            }>Advanced
            </button>
            <div className="content" style={{ maxHeight: '500px' }}>
                <div style={{ justifyContent: 'space-between' }}>
                    <h1 style={{ display: 'inline', fontSize: '10px', color: '', }}>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/simple_trig_inequality.pdf'
                            >Simple Trig Inequality</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/prime_factoriazation_for_factorials_answers.pdf'
                            >Answers</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/brahmagupta%E2%80%99s_formula.pdf'
                            >Brahmagupta's Formula</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/brahmagupta%E2%80%99s_formula_answers.pdf'
                            >Answers</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/linear_diophantine_equations.pdf'
                            >Linear Diophantine Equations</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/linear_diophantine_equations_answers.pdf'
                            >Answers</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/polynomial_factorization.pdf'
                            >Polynomial Factorization</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/polynomial_factorization_answers.pdf'
                            >Answers</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/de_moivres_formula.pdf'
                            >De Moivres Formula</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/de_moivres_formula_answers.pdf'
                            >Answers</a>
                        </div>
                        <div className='practicediv'>
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/de_moivres_formula.pdf'
                            >Logarithm from Contests</a> | 
                            <a href='https://203076101960895753.weebly.com/uploads/1/3/6/4/136474762/logarithm.pdf'
                            >Answers</a>
                        </div>
                    </h1>
                </div>
            </div>

            <button className="collapsible" id='playground' onClick={
                () => {
                    var me = document.getElementById('playground')
                    me.classList.toggle('cactive')
                    var content = me.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                        console.log(me.id, content.scrollHeight)
                    }
                }
            }>Playground
            </button>
            <div className="content" style={{ maxHeight: '500px' }}>
                <div className='practicediv'>
                    <a href='/Practice/SimpleAddition'>Simple Addition</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/SimpleSubtraction'>Simple Subtraction</a>
                </div>
                <div className='practicediv'>
                    <a href='/Practice/SimpleMultiplication'>Simple Multiplication</a>
                </div>
                <div className='practicediv' style={{ display:'none' }}>
                    Grade 10: <a href='/Practice/Adventure'>Adventure</a>
                </div>
            </div>
        </>
    );
}

export default Practice;
