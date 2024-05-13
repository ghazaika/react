
const Childs =({onSelect, children, buttonPass, onSelected,ButtonName, ...props}) =>{
return(<>
<div {...props}><h2>1.Component Composition</h2>
        Means the value can be sent between the child components from parent<br/>
    <h3>example 
        &lt;child&gt;children &lt;/child &gt;
    </h3>
    in child component <br/>
    <b><pre><code>const child = ({children})  children</code></pre></b><br/>
    <h4>this has to be always written as props children</h4><br/>

     on click we donot write () coz it will execute when this line of code comes<br/>

</div>
<div>
    <h2>2. Button onClick can be passed from parent to child and handled in parent.passed through props

    </h2>
    <button className = {onSelected  ? "active": "false"} 
    onClick = {onSelect}>This button when clicked the even will be fired in parent</button>

    <br/>
    <br/>
</div>
<div>
    <h2>3. on clicking button event can be triggered and value can be passed as params</h2>
    <button onClick={buttonPass}>on click pass param</button>

    <br/>
    <b>on button click params can be passed in parent onclick 
        static value can be passed

    </b>
</div>
<div>
    <h2>4. Hooks should always start with us, imported from React</h2>
    <br/>
    hooks should be placed on top and cannot be nested inside function
    useState always is array<br/>
    useState rerenders all the components that is involved with the updation of data
</div>
<div>
    <h2>5. To get the remaining attribute used or value passed in child use in function <pre><code> (&#123;...props&#125;)</code></pre></h2>
    <br/>
    Suppose from parent you are calling child 
    and it has id , className, placeholder  and other attributes which is static and only needs 
    to be displayed and whose destructuring is 
    not done in child . 
    instaed of writting all we can use  (&#123;...props&#125;) in function
    and use this in the tag wherever required it will be displayed.
    <br/>
    in tag or element wherever required use &#123;...props&#125;
</div>
<div>
    <h2>the tag name can also be passed from parent but it has to be in upper case</h2>
    <ButtonName>{children}</ButtonName>
</div>
</>)
}

export default Childs