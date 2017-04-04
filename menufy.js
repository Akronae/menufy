'use strict'

class ContextMenu
{
    constructor ( structure )
    {
        this.structure = structure
        this.menu = null
        this.x = 0
        this.y = 0
        
        this.showOnRightClick = true
        this.hideDefaultContextMenu = true
        this.checkClasses = true
        
        // Middleware functions
        this.moveTo = ( x, y ) => {
            this.menu.style.left = x + 'px'
            this.menu.style.top = y + 'px'
        }
        
        this.init = () =>
        {
            this.buildDOM( this.structure )
            
            document.oncontextmenu = (e) =>
            {
                if ( this.checkClasses && this.structure[0].meta && !e.target.classList.contains(this.structure[0].meta.target) )
                { this.hide(); return true }
                
                this.x = e.clientX
                this.y = e.clientY

                if (this.showOnRightClick) this.show( this.x, this.y )
                
                if (this.hideDefaultContextMenu) return false
            }
            
            document.onclick = () => this.hide()
        }
        
        window.addEventListener('load', this.init, false)
    }
    
    show ( x, y )
    {
        this.moveTo(x, y)
        this.menu.style.visibility = 'visible'
    }
    
    hide ()
    {
        this.menu.style.visibility = 'hidden'
    }
    
    
    buildDOM ( structure )
    {
        this.menu = document.createElement('div')
        this.menu.style.visibility = 'hidden'
        this.menu.style.position = 'absolute'
        this.menu.style.zIndex = 100
        this.menu.classList.add('menufy-menu')
        
        this.outerZone = document.createElement('div')
        this.outerZone.style.width = '100%'
        this.outerZone.style.height = '100%'
        this.outerZone.style.position = 'fixed'
        this.outerZone.onclick = () => this.hide()
        
        structure.forEach( (action, index) =>
        {
            let act = document.createElement('span')
            
            // Parsing propertie into DOM attribute
            for ( let attr in action ) { if (attr != 'action') act.setAttribute(attr, action[attr]) }
            
            act.classList.add('menufy-action')
            act.style.display = 'table'
            act.innerText = action.label
            act.onclick = action.action
            
            this.menu.appendChild(act)
        })
        
        document.getElementsByTagName('body')[0].appendChild(this.menu)
        document.getElementsByTagName('body')[0].appendChild(this.outerZone)
    }
}