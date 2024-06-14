function getClientInfo()
    return {
      name = "ClearParameter",
      author = "vocatart",
      versionNumber = 1,
      minEditorVersion = 65540
    }
  end
  
  local form = {
      title = "ClearParameter",
      message = "All parameters cleared!",
      buttons = "Cancel"
  }

  function main()
    local mainRef = SV:getProject():getTrack(1):getGroupReference(1)
    local mainGroup = mainRef:getTarget()

    local pitchbend = mainGroup:getParameter("PitchDelta")
    local vibratoEnv = mainGroup:getParameter("vibratoEnv")
    local loudness = mainGroup:getParameter("loudness")
    local tension = mainGroup:getParameter("tension")
    local breathiness = mainGroup:getParameter("breathiness")
    local voicing = mainGroup:getParameter("voicing")
    local gender = mainGroup:getParameter("gender")

    pitchbend:removeAll()
    vibratoEnv:removeAll()
    loudness:removeAll()
    tension:removeAll()
    breathiness:removeAll()
    voicing:removeAll()
    gender:removeAll()

    SV:showCustomDialog(form)

    SV:finish()
  end
